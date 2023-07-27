// import React, { useEffect, useState } from "react";
// import Web3Connector from "./Web3Connector";
// import { useParams } from "react-router-dom";
// // import MyComponent from "./preqs";
// const SetPatchComponent = () => {
//   const [ar34, setAr34] = useState([]);
//   //   const [account, setAccount] = useState(null);
//   const [account, setAccount] = useState("");
//   //   const [data56, setData56] = useState([]);
//   const [contract1, setContract] = useState(null); // Initialize contract1 state with null
//   const [contractStatus, setContractStatus] = useState("");
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchPatchDetails = async () => {
//       if (contract1) {
//         const dt5 = await contract1.methods.getarr(id).call();
//         const ar34 = [];
//         console.log(dt5);
//         for (let i = 0; i < dt5[1].length; i++) {
//           ar34.push(dt5[1][i]);
//           console.log(dt5[1][i]);
//         }

//         for (let i = 0; i < dt5[2].length; i++) {
//           ar34.push(dt5[2][i]);
//           console.log(dt5[2][i]);
//         }

//         setAr34(ar34);
//         document.getElementById("inputArea5").value = ar34;
//         document.getElementById("inputArea4").value = dt5[0];
//         console.log(ar34);
//       };
//     }

//     fetchPatchDetails();
//   }, [contract1]);

//   const setPatchDetails = async () => {
//     const myEntry = document.getElementById("inputArea").value;
//     const myEntry2 = document.getElementById("inputArea2");
//     const myEntry3 = document.getElementById("inputArea3").value;
//     const myEntry4 = document.getElementById("inputArea4").value;
//     console.log(ar34, myEntry4, myEntry3, myEntry2, myEntry);
//     // document.getElementById("inputArea5").value=ar34;
//     const file = myEntry2.files[0];
//     const reader = new FileReader();
//     reader.readAsArrayBuffer(file);

//     reader.onload = async () => {
//       const fileData = new Uint8Array(reader.result);
//       await contract1.methods
//         .addpatch(myEntry, fileData, myEntry3, myEntry4, ar34)
//         .send({ from: account })
//         .then(() => {
//           alert("Patch info successfully added to blockchain");
//         });
//     };
//   };

//   return (
//     <>
//       <div>
//         <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract}
//           setContractStatus={setContractStatus}
//         />
//       </div>
//       <div class="border border-secondary">
//         <div class="col-8 mx-auto my-5">
//           <form>
//             <div class="row mb-3">
//               <label class="col-sm-4 col-form-label" for="patchname">Patch_Name</label>
//               <div class="col-sm col-sm-6">
//                 <input type="text" class="form-control" id="inputArea" />
//               </div>
//             </div>
//             <div class="row mb-3">
//               <label class="col-sm-4 col-form-label" for="patchNo">Patch_File.</label>
//               <div class="col-sm class-sm-5 col-lg-4">
//                 <input type="file" class="form-control" id="inputArea2" />
//               </div>
//             </div>
//             <div class="row mb-3">
//               <label class="col-sm-4 col-form-label" for="patchNo">Version</label>
//               <div class="col-sm class-sm-5 col-lg-4">
//                 <input type="text" class="form-control" id="inputArea3" />
//               </div>
//             </div>
//             <div class="row mb-3">
//               <label class="col-sm-4 col-form-label" for="patchNo">Softwares</label>
//               <div class="col-sm class-sm-5 col-lg-4">
//                 <select class="form-select" id="inputArea4" >
//                   <option selected>Choose software...</option>
//                   <option value="chrome">chrome</option>
//                   <option value="vscode">vscode</option>
//                   <option value="sudoko">sudoko</option>
//                 </select>
//               </div>
//             </div>
//             <div class="row mb-3">
//               <label class="col-sm-4 col-form-label" for="features">Features</label>
//               <div class="col-sm col-sm-6">
//                 <textarea id="inputArea5" class="w-100" rows="5"></textarea>
//               </div>
//             </div>
//           </form>
//           {/* <button onClick={setPatchDetails}>Set Patch Details</button> */}
//           <button type="submit" class="btn btn-primary" onClick={setPatchDetails}>
//             Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SetPatchComponent;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import { useNavigate, useParams } from "react-router-dom";
import { Web3Storage } from 'web3.storage';
import axios from "axios";

const SetPatchComponent = () => {
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
  const navigate=useNavigate();

  useEffect(() => {
    const fetchPatchDetails = async () => {
      if (contract1) {
        const dt5 = await contract1.methods.getarr(Number(id)).call();
        console.log(dt5);
        console.log(contract1);
        const ar3 = dt5[2].concat(dt5[3]);
        document.getElementById("input5").value = ar3;
        setAr34(ar3);
        setSelectedSoftware(dt5[1]);
      }
    };

    fetchPatchDetails();
  }, [contract1]);
  const makeStorageClient = () => {
    return new Web3Storage({ token: getAccessToken() });
  };
  const [file, setFile] = useState(null);
  const [downloadCid, setDownloadCid] = useState('');

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
    console.log(patchName, cid, patchVersion, selectedSoftware, ar34);
    try {
      await contract1.methods.addpatch(id, patchName, cid, patchVersion, selectedSoftware, ar34)
        .send({ from: process.env.REACT_APP_Developer_Address })
        .then(async (result) => {
          document.getElementById("alt").innerHTML = "Patch added to blockchain";
          document.getElementById("input5").innerHTML = "";
          document.getElementById("input4").innerHTML = "";
          console.log(result.transactionHash);
          await axios.post('http://localhost:5000/developer/transactions', { roleFunction:"developer-register", transactionHash:result.transactionHash,from:result.from, to:result.to, gasUsed:parseInt(result.gasUsed.toString()), blockNumber:parseInt(result.blockNumber.toString()) });
          console.log('Transaction added successfully', result.transactionHash);
          navigate('/developer/preqs');
        });
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
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
            <div className="row mb-3">
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
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="patchNo">
                Patch_File.
              </label>
              <div className="col-sm class-sm-5 col-lg-4">
                <input type='file' onChange={handleFileUpload} />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="patchNo">
                Version
              </label>
              <div className="col-sm class-sm-5 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  value={patchVersion}
                  onChange={(e) => setPatchVersion(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="patchNo">
                Softwares
              </label>
              <div className="col-sm class-sm-5 col-lg-4">
                <input
                  id="input4"
                  className="form-control"
                  value={selectedSoftware}
                  onChange={(e) => setSelectedSoftware(e.target.value)}
                >
                </input>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="features">
                Features
              </label>
              <div className="col-sm col-sm-6">
                <textarea
                  id="input5"
                  className="w-100"
                  rows="5"
                  value={ar34}
                ></textarea>
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
          <p id="alt"></p>
        </div>
      </div>
    </div>
  );
};

export default SetPatchComponent;
