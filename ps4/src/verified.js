// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3';
// import Web3Connector from './Web3Connector';
// const VerifiedComponent = () => {
//   const [patches, setPatches] = useState([]);
//   const [account, setAccount] = useState("");
//   const [contract1, setContract1] = useState(null);
//   const [contractStatus, setContractStatus] = useState("");

//   useEffect(() => {
//     const fetchPatches = async () => {
//       if (contract1) {
//         const fetchedPatches = await contract1.methods.getpatches().call();
//         setPatches(fetchedPatches);
//         console.log(fetchedPatches);
//       }
//     };
//     fetchPatches();
//   }, [contract1]);

//   const renderPatches = () => {
//     const a = ["patchid", "patchfilename", "patchversion", "patchplatform", "timestamp", "features"];

//     return patches.map((patch, index) => {
//       if (patch["verstat"] === "Inprogress") {
//         return null;
//       }

//       return (
//         <>
//         <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract1} // Update the contract1 state value
//           setContractStatus={setContractStatus}
//         />
//         <div className="card my-3" key={index}>
//           <div className="card-body">
//             <div>
//               <h6 className="card-title">Patch_No: {patch["patchversion"]}</h6>
//             </div>
//             <div className="col-6 col-sm-4 col-md-6">
//               <table className="table table-borderless">
//                 <tbody>
//                   {a.map((i, idx) => (
//                     <tr key={idx}>
//                       <td>{i}:</td>
//                       <td>
//                         {i === "timestamp" ? (
//                           new Date(patch[i] * 1000).toLocaleString()
//                         ) : (
//                           patch[i]
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <button className="btn btn-light" onClick={() => handleDownload(patch)}>
//             Download ({patch["patchfilename"]})
//           </button>
//         </div>
//         </>
//       );
//     });
//   };

//   const handleDownload = async (patch) => {
//     const data = await contract1.methods.gettxt(patch["patchlink"]).call();
//     const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = patch["patchfilename"];
//     document.body.appendChild(a);
//     a.click();
//   };

//   return (
//     <div id="cards2">
//       {renderPatches()}
//     </div>
//   );
// };

// export default VerifiedComponent;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
import { Web3Storage } from "web3.storage";
const Verified = () => {
  const [patches, setPatches] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");
  function timestampToDate(a) {
    const timestamp = Number(a);
    const dateObject = new Date(timestamp * 1000);
    const formattedTime = dateObject.toLocaleString();
    return formattedTime;
  }
  useEffect(() => {
    const fetchPatches = async () => {
      if (contract1) {
        const fetchedPatches = await contract1.methods.getpatches().call();
        setPatches(fetchedPatches);
        console.log(fetchedPatches);
      }
    };
    // console.log(process.env.REACT_APP_Token);
    fetchPatches();
  }, [contract1]);

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
        await downloadFile(patchLink);
      } catch (error) {
        console.error('Failed to download file:', error);
      }
    }
  };

  return (
    <>
      <Web3Connector
        setAccount={setAccount}
        setContract={setContract1} // Update the contract1 state value
        setContractStatus={setContractStatus}
      />
      <div className="container border border-secondary p-3">
        <div id="cards">
          {patches != null ? (patches.map((patch) => {
            if (patch.verstat !== "verified" && patch.verstat !== "reupload") {
              return null;
            }

            return (
              <div className="card my-3" key={patch.patchid}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
                    <div className="d-flex justify-content-between">
                      <p>verified</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-6">
                    <table className="table table-borderless">
                      <tbody>
                        {[
                          "patchid",
                          "patchfilename",
                          "patchversion",
                          "patchplatform",
                          "timestamp",
                          "features",
                        ].map((i) => (
                          <tr key={i}>
                            {/* <td>{`${i} :`}</td> */}
                            <td>{i}:</td>
                              <td>
                                {i === "timestamp"
                                  ? timestampToDate(patch[i])
                                  : patch[i].toString()}
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      handleDownload(patch.patchlink)
                    }
                  >
                    Download ({patch.patchfilename})
                  </button>
                </div>
              </div>
            );
          })) : (
            <div>
              <p colSpan="5">No data available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Verified;
// const handleReject = (patchId) => {
//   setPopoverPatchId(patchId);
//   setShowPopover(true);
// };

// const handleRejectSubmit = async (patchId) => {
//   if (!rejectReason) {
//     setRejectError("Please enter a rejection reason.");
//     return;
//   }

//   setShowPopover(false);
//   setRejectError("");
//   console.log(patchId, rejectReason);
//   const result1 = await contract1.methods.rvadd(patchId, rejectReason).send({ from: account });
//   console.log();
//   await axios.post('http://localhost:5000/verifier/transactions', { roleFunction: "verifier-reject", transactionHash: result1.transactionHash });
//   console.log('Transaction added successfully');
//   // window.location.reload();
// };
// const handlePopoverClose = () => {
//   setShowPopover(false);
//   setRejectReason("");
//   setRejectError("");
// };
// const getAccessToken = () => {
//   // Insert your API token here as a string
//   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto';

// };

// const makeStorageClient = () => {
//   return new Web3Storage({ token: getAccessToken() });
// };
// async function downloadFile(cid) {
//   const client = makeStorageClient();
//   const res = await client.get(cid);
//   const files = await res.files();
//   if (files.length > 0) {
//     const file = files[0];
//     const downloadUrl = URL.createObjectURL(file);
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.download = file.name;
//     link.click();
//     URL.revokeObjectURL(downloadUrl);
//   }
// }

// const handleDownload = async (patchLink) => {
//   if (patchLink) {
//     try {
//       console.log(patchLink);
//       await downloadFile(patchLink);
//     } catch (error) {
//       console.error('Failed to download file:', error);
//     }
//   }
// };