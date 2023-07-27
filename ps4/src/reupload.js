import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import { useParams } from "react-router-dom";
import { Web3Storage } from 'web3.storage';
import axios from "axios";
// import axios from "axios";

const Reupload = () => {
  const [ar34, setAr34] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract] = useState(null);
  const [cid1, setCid1] = useState("");
  const [contractStatus, setContractStatus] = useState("");
  const { id } = useParams();
  const [patchName, setPatchName] = useState("");
  const [patchFile, setPatchFile] = useState(null);
  const [patchVersion, setPatchVersion] = useState("");
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [features, setFeatures] = useState("");
  const [file, setFile] = useState(null);
  const [downloadCid, setDownloadCid] = useState('');
  const [data35, setData35] = useState([]);

  useEffect(() => {
    if (contract1) {
      const fetchData = async () => {
        const response = await contract1.methods.getpatches().call();
        setData35(response);
        console.log(response);
      };

      fetchData();
    }
  }, [contract1]);

  const makeStorageClient = () => {
    return new Web3Storage({ token: getAccessToken() });
  };
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('stored files with cid:', cid);
    return cid;
  }
  const getAccessToken = () => {
    // Insert your API token here as a string
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto';

  };
  let cid;
  const setPatchDetails = async () => {
    // const fileData = new Uint8Array(await readFileContents(patchFile));
    // console.log(patchName, fileData, patchVersion, selectedSoftware, ar34);
    console.log(contract1.methods);
    console.log("hello");
    if (file) {
      try {
        cid = await storeFiles([file]);
        // setCid1(cid);
        console.log('stored files with cid:', cid);
        // Do any further actions after successful upload
      } catch (error) {
        console.error('Failed to store files:', error);
      }
    }
    console.log(cid);
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(patchFile);
    // reader.onload = async ()=>{
    //   let fileData = new Uint8Array(reader.result);
    // console.log(patchName, cid, patchVersion, selectedSoftware, ar34);
    try {
      await contract1.methods.reupload(id, cid)
        .send({ from: process.env.REACT_APP_Developer_Address })
        .then(async (result) => {
          document.getElementById("alt").innerHTML = "Patch added to blockchain";
          console.log(result.transactionHash);
          await axios.post('http://localhost:5000/developer/transactions', { roleFunction:"developer-reupload", transactionHash:result.transactionHash,from:result.from, to:result.to, gasUsed:parseInt(result.gasUsed.toString()), blockNumber:parseInt(result.blockNumber.toString()) });
          console.log('Transaction added successfully', result.transactionHash);
          window.location.href="/developer/preqs";
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  // const readFileContents = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.readAsArrayBuffer(file);
  //     reader.onload = (event) => {
  //       resolve(event.target.result);
  //     };

  //     reader.onerror = (error) => {
  //       reject(error);
  //     };

  //   });
  // };

  return (
    <>
      <div>
        <Web3Connector
          setAccount={setAccount}
          setContract={setContract}
          setContractStatus={setContractStatus}
        />
      </div>
      <div className="border border-secondary">
        <div className="col-8 mx-auto my-5">
          <form>
            {/* <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="patchname">
                Patch_Name
              </label>
              <div className="col-sm col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={patchName}
                  onChange={(e) => setPatchName(e.target.value)}
                />
              </div>
            </div> */}
            <table>
              <tbody>
                {data35.map((patch) => (patch.rrid == id && (
                  <tr key={patch[0]}>
                    <td className="table-cell" >{`Patch id: ${parseInt(patch[0])}`}</td>
                    <td className="table-cell" style={{ padding: '8px' }}>{`Patch filename: ${(patch[1])}`}</td>
                    <td className="table-cell" style={{ padding: '8px' }}>{`Patch Version: ${Number(patch[10])+2}`}</td>
                  </tr>
                )))}
              </tbody>
            </table>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="patchNo">
                Patch_File.
              </label>
              <div className="col-sm class-sm-5 col-lg-4">
                <input type='file' onChange={handleFileUpload} />
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={setPatchDetails}
          >
            Register
          </button>
        </div>
        <p id="alt"></p>
      </div>
    </>
  );
};

export default Reupload;
