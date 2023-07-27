import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Connector from './Web3Connector';
import axios from 'axios';
import { Web3Storage } from 'web3.storage';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Upatch = () => {
  const [data35, setData35] = useState([]);
  const [data44, setData44] = useState([]);
  const [data45, setData45] = useState([]);
  const [data56, setData56] = useState([]);
  const [items, setItems] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");
  const [sr2, setSr2] = useState('');
  const [sr3, setSr3] = useState('');
  const [sr4, setSr4] = useState('');
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if(contract1){
        getPatchData();
    }
    setUserId(localStorage.getItem('uname'));
  }, [contract1,data44]);
  useEffect(() => {
    if (data35.length > 0) {
      $("#myTable5").DataTable();
    }
}, [data35]);

  const getPatchData = async () => {
    const data = await contract1.methods.getpatches().call();
    const data1 = await contract1.methods.getArray().call();
    setData35(data);
    setData44(data1);
  };
  const getAccessToken = () => {
    // Insert your API token here as a string
    return process.env.REACT_APP_Token;

};

const makeStorageClient = () => {
    return new Web3Storage({ token: getAccessToken() });
};
  async function downloadFile(cid) {
    const client = makeStorageClient();
    const res = await client.get(cid);
    const files = await res.files();
    if (files.length > 0) {
        const file = files[0];
        const downloadUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(downloadUrl);
    }
}

  const handleDownload = async (patchLink) => {
      if (patchLink) {
          try {
            console.log(patchLink);
              await downloadFile(patchLink).then((response) => {
              toast.success('Patch downloaded successfully!', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.reload();
            }, 4000);
          });
          } catch (error) {
              console.error('Failed to download file:', error);
          }
      }
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1;
    const year = formattedDate.getFullYear();
    const hours = formattedDate.getHours();
    const minutes = formattedDate.getMinutes();
    const seconds = formattedDate.getSeconds();

    const formattedDateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateString;
  };

  const handleDownload2 = async (patchId,patchLink,patchFilename,software) => {
    setData45(patchId);
    // console.log(patchId,patchLink,patchFilename,software);
    console.log(software,patchFilename,userId);
  try {
    await axios.post('http://localhost:5000/api/downloads', { software:software,patchname: patchFilename,username:userId });
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <>
    <Web3Connector
          setAccount={setAccount}
          setContract={setContract1} // Update the contract1 state value
          setContractStatus={setContractStatus}
        />
        <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='container'>
    <div className="border border-secondary table-responsive">
        <div className="col-10 mx-auto my-5">
      <table id="myTable5">
        <thead>
          <tr>
            <th>Patch.id</th>
            <th>Patch_Name</th>
            <th>Software</th>
            <th>Features</th>
            <th>timestamp</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {data35.map((patch) => {
            if (patch[8] === 'deployed') {
              return (
                <tr key={patch[0]}>
                  <td>{patch[0].toString()}</td>
                  <td>{patch[1]}</td>
                  <td>{patch[4]}</td>
                  <td>{patch[5]}</td>
                  {/* <td>{Number(patch[6])}</td> */}
                  <td>{formatDate(Number(patch[6])*1000)}</td>
                  <td>
                    {data44.includes(patch[0]) ? (
                      <span>Downloaded</span>
                    ) : (
                      <button onClick={() => {handleDownload(patch[2]);handleDownload2(patch[0],patch[2],patch.patchfilename,patch[4])}}>Download</button>
                    )}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default Upatch;
