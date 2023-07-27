// // import React, { createContext, useContext } from 'react';

// // // Create a context
// // const ThemeContext = createContext();

// // // Create a component that provides the context value
// // const ThemeProvider = ({ children }) => {
// //   const theme = 'dark';

// //   return (
// //     <ThemeContext.Provider value={theme}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // // A child component that consumes the context value
// // const ThemeConsumer = () => {
// //   const theme = useContext(ThemeContext);
// //   console.log(theme);
// //   return <div>Current theme: {theme}</div>;
// // };

// // // Usage in the app
// // const App = () => {
// //   return (
// //     <ThemeProvider>
// //       <ThemeConsumer />
// //     </ThemeProvider>
// //   );
// // };

// // export default App;
// // import React, { useReducer } from 'react';

// // // Reducer function
// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'INCREMENT':
// //       return { count: state.count + 1 };
// //     case 'DECREMENT':
// //       return { count: state.count - 1 };
// //     default:
// //       return state;
// //   }
// // };

// // // Component using useReducer
// // const Counter = () => {
// //   const [state, dispatch] = useReducer(reducer, { count: 0 });

// //   const increment = () => {
// //     dispatch({ type: 'INCREMENT' });
// //   };

// //   const decrement = () => {
// //     dispatch({ type: 'DECREMENT' });
// //   };

// //   return (
// //     <div>
// //       <p>Count: {state.count}</p>
// //       <button onClick={increment}>Increment</button>
// //       <button onClick={decrement}>Decrement</button>
// //     </div>
// //   );
// // };

// // // Usage in the app
// // const App = () => {
// //   return <Counter />;
// // };

// // export default App;
// // import React, { useRef } from 'react';

// // const TextInput = () => {
// //   const inputRef = useRef(null);

// //   const focusInput = () => {
// //     inputRef.current.focus();
// //   };

// //   return (
// //     <div>
// //       <input ref={inputRef} type="text" />
// //       <button onClick={focusInput}>Focus Input</button>
// //     </div>
// //   );
// // };

// // // Usage in the app
// // const App = () => {
// //   return <TextInput />;
// // };

// // export default App;
// // import React, { createContext, useContext } from 'react';

// // const UserContext = createContext();

// // const UserProfile = () => {
// //   const user = useContext(UserContext);
// //   const UserProf2 = () => {
// //     const user2 = useContext(UserContext);
  
// //     return (
// //       <div>
// //         <h2>User Profile</h2>
// //         <p>Name: {user2.name}</p>
// //         <p>Email: {user2.email}</p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div>
// //       <UserProf2/>
// //       <h2>User Profile</h2>
// //       <p>Name: {user.name}</p>
// //       <p>Email: {user.email}</p>
// //     </div>
// //   );
// // };
// // const UserProf2 = () => {
// //   const user2 = useContext(UserContext);

// //   return (
// //     <div>
// //       <h2>User Profile</h2>
// //       <p>Name: {user2.name}</p>
// //       <p>Email: {user2.email}</p>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const user = {
// //     name: 'John Doe',
// //     email: 'johndoe@example.com'
// //   };

// //   return (
// //     <>
// //     <UserContext.Provider value={user}>
// //       <UserProfile />
// //     </UserContext.Provider>
// //     </>
// //   );
// // };

// // export default App;

// // import { useState, useEffect, useRef } from "react";
// // // import ReactDOM from "react-dom/client";

// // function App() {
// //   const [inputValue, setInputValue] = useState("");
// //   const count = useRef(0);

// //   useEffect(() => {
// //     count.current = count.current + 1;
// //   });

// //   return (
// //     <>
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)}
// //       />
// //       <h1>Render Count: {count.current}</h1>
// //     </>
// //   );
// // }
// // export default App;
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// // import React, { useState } from "react";

// // const App = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     age: "",
// //   });

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormData((prevFormData) => ({
// //       ...prevFormData,
// //       [name]: value,
// //     }));

// //   };
// //   const handleFormSubmit = (event) => {
// //     event.preventDefault();
// //     console.log(formData); // Display form data in the console or perform other actions with it
// //   };
  

// //   return (
// //     <>
// //     <form>
// //       <input
// //         type="text"
// //         name="name"
// //         value={formData.name}
// //         onChange={handleChange}
// //         placeholder="Name"
// //       />
// //       <input
// //         type="email"
// //         name="email"
// //         value={formData.email}
// //         onChange={handleChange}
// //         placeholder="Email"
// //       />
// //       <input
// //         type="number"
// //         name="age"
// //         value={formData.age}
// //         onChange={handleChange}
// //         placeholder="Age"
// //       />
// //     </form>
// //     <button type="button" onClick={handleFormSubmit}>Submit</button>
// //     {/* <p>{formData.name}</p> */}
// //     </>
// //   );
// // };

// // export default App;
// // import React, { useState } from "react";

// // const App = () => {
// //   const [formData, setFormData] = useState([]);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleNameChange = (event, index) => {
// //     if (!isSubmitted) {
// //       const updatedFormData = [...formData];
// //       updatedFormData[index].name = event.target.value;
// //       setFormData(updatedFormData);
// //     }
// //   };

// //   const handleAgeChange = (event, index) => {
// //     if (!isSubmitted) {
// //       const updatedFormData = [...formData];
// //       updatedFormData[index].age = event.target.value;
// //       setFormData(updatedFormData);
// //     }
// //   };

// //   const handleAdd = (index) => {
// //     if (!isSubmitted) {
// //       const updatedFormData = [...formData];
// //       updatedFormData.splice(index + 1, 0, { name: "", age: "" });
// //       setFormData(updatedFormData);
// //     }
// //   };

// //   const handleRemove = (index) => {
// //     if (!isSubmitted) {
// //       const updatedFormData = [...formData];
// //       updatedFormData.splice(index, 1);
// //       setFormData(updatedFormData);
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     setIsSubmitted(true);
// //     const er = JSON.stringify(formData);
// //     console.log(er);
// //     // You can perform further processing or send the data to an API here
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         {formData.map((item, index) => (
// //           <div key={index}>
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               value={item.name}
// //               onChange={(event) => handleNameChange(event, index)}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Age"
// //               value={item.age}
// //               onChange={(event) => handleAgeChange(event, index)}
// //             />
// //             {index === formData.length - 1 && (
// //               <button
// //                 type="button"
// //                 className="btn mx-3 btn-primary"
// //                 onClick={() => handleAdd(index)}
// //               >
// //                 +
// //               </button>
// //             )}
// //             <button
// //               type="button"
// //               className="btn mx-3 btn-danger"
// //               onClick={() => handleRemove(index)}
// //             >
// //               -
// //             </button>
// //           </div>
// //         ))}
// //         {formData.length === 0 && (
// //           <button
// //             type="button"
// //             className="btn mx-3 btn-primary"
// //             onClick={() => handleAdd(-1)}
// //           >
// //             +
// //           </button>
// //         )}
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Web3Connector from "./Web3Connector";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// function Labeller2() {
//   const [account, setAccount] = useState("");
//   const [usid, setusid] = useState({});
//   const [data56, setData56] = useState([]);
//   const [contract1, setContract] = useState("");
//   const [contractStatus, setContractStatus] = useState("");
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/items');
//       const items = response.data;

//       // Extracting names from the items array
//       const names = items.map(item => ({
//         _id: item._id,
//         name: item.name,
//         name1: item.name1,
//         name2: item.name2,
//         name3: item.name3
//       }));
//       setData56(names);
//       console.log(names);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAccept = async(card) => {
//     console.log(card);

    
    
//     // const { name, name1, name2, name3 } = card;
//     await contract1.methods.addbug(card.name, card.name1, card.name2, card.name3).send({ from: account });
//     // Perform accept action here
//   };

// //   const handleReject = (card) => {
// //     console.log(card);

// //     // Perform reject action here
// //   };
// const handleReject = async (card) => {
//   console.log(card);
//   // Perform reject action here

//   // Remove the rejected card from the data56 state
//   setData56(prevData => prevData.filter(item => item !== card));
//   try {
//     const response = await axios.delete(`http://localhost:5000/api/items/${card._id}`);
//     console.log(response.data); // Optional: log the response from the server
//   } catch (error) {
//     console.error(error);
//   }
// };

// //   const deleteItemByName = async (itemName) => {
// //     try {
// //       const response = await axios.delete(`http://localhost:5000/api/items/${itemName}`);
// //       console.log(response.data); // Optional: log the response from the server
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

//   return (
//     <div>
//       <div className="form-check form-switch">
//           <input
//               className="form-check-input"
//               type="checkbox"
//               id="edit-toggle"
//               checked={editMode}
//               onChange={() => setEditMode(!editMode)}
//           />
//           <label className="form-check-label" htmlFor="edit-toggle">
//               Toggle Edit
//           </label>
//           </div>
//         <Web3Connector
//                 setAccount={setAccount}
//                 setContract={setContract}
//                 setContractStatus={setContractStatus}
//             />
//       {data56.map((card, index) => (
//         <div key={index} className="card">
//           <div className="card-body">
//           <div className="d-flex justify-content-between">
//             <h5 className="card-title">software: {card.name}</h5>
//           <div className="d-flex justify-content-between">
//             <button onClick={() => handleAccept(card)} className="btn btn-primary">Accept</button>
//             <button onClick={() => handleReject(card)} className="btn btn-danger">Reject</button>
//             </div>
//             </div>
//             {/* <p className="card-text">version: {card.name1}</p>
//             <p className="card-text">description: {card.name2}</p>
//             <p className="card-text">feature: {card.name3}</p> */}

//             <label >Version:</label>
//             <input
//                 type="text"
//                 className={`form-control edit-input${editMode ? '' : ' readonly'}`}
//                 defaultValue={card.name1}
//                 readOnly={!editMode}/>
//             <label >Descrition: </label>
//             <input
//                 type="text"
//                 className={`form-control edit-input${editMode ? '' : ' readonly'}`}
//                 defaultValue={card.name2}
//                 readOnly={!editMode}/>
//             <label >Feature:</label>
//             <input
//                 type="text"
//                 className={`form-control edit-input${editMode ? '' : ' readonly'}`}
//                 defaultValue={card.name3}
//                 readOnly={!editMode}/>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Labeller2;

// import React, { useState } from "react";

// const DynamicForm = () => {
//   const [formData, setFormData] = useState([]);

//   const handleNameChange = (event, index) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index].name = event.target.value;
//     setFormData(updatedFormData);
//   };

//   const handleAgeChange = (event, index) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index].age = event.target.value;
//     setFormData(updatedFormData);
//   };

//   const handleAdd = (index) => {
//     const updatedFormData = [...formData];
//     updatedFormData.splice(index + 1, 0, { name: "", age: "" });
//     setFormData(updatedFormData);
//   };

//   const handleRemove = (index) => {
//     const updatedFormData = [...formData];
//     updatedFormData.splice(index, 1);
//     setFormData(updatedFormData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // You can perform further processing or send the data to an API here
//   };

//   return (
//     <div>
//       {/* <h2>Dynamic Form</h2> */}
//       <form onSubmit={handleSubmit}>
//         {formData.map((item, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={item.name}
//               onChange={(event) => handleNameChange(event, index)}
//             />
//             <input
//               type="text"
//               placeholder="Age"
//               value={item.age}
//               onChange={(event) => handleAgeChange(event, index)}
//             />
//             {index === formData.length - 1 && (
//               <button type="button" onClick={() => handleAdd(index)}>
//                 Add
//               </button>
//             )}
//             <button type="button" onClick={() => handleRemove(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//         {formData.length === 0 && (
//           <button type="button" onClick={() => handleAdd(-1)}>
//             Add
//           </button>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DynamicForm;
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Web3Storage } from 'web3.storage';

// const App = () => {
//   const [client, setClient] = useState(null);
//   const [file1, setFile] = useState(null);
  

//   useEffect(() => {
//     // Initialize Web3Storage client
//     const initializeWeb3Storage = async () => {
//       const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto'; // Replace with your own API key
//       const web3StorageClient = new Web3Storage({ token: apiKey });
//       setClient(web3StorageClient);
//     };

//     initializeWeb3Storage();
//   }, []);
//   const handleUpload = async (event) => {
//     setFile(event);
//   }

//   const handleSubmit = async () => {
//     try {
//       console.log("hello");
//       const cid = await client.put(file1);
//       console.log(`File uploaded successfully. CID: ${cid}`);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Web3Storage Example</h1>
//       <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
//       <button onSubmit={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { Web3Storage } from 'web3.storage';

const App = () => {
    const [file, setFile] = useState(null);
    const [downloadCid, setDownloadCid] = useState('');

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                const cid = await storeFiles([file]);
                console.log('stored files with cid:', cid);
                // Do any further actions after successful upload
            } catch (error) {
                console.error('Failed to store files:', error);
            }
        }
    };

    const handleDownload = async () => {
        if (downloadCid) {
            try {
                await downloadFile(downloadCid);
            } catch (error) {
                console.error('Failed to download file:', error);
            }
        }
    };

    const getAccessToken = () => {
        // Insert your API token here as a string
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto';

    };

    const makeStorageClient = () => {
        return new Web3Storage({ token: getAccessToken() });
    };

    async function storeFiles(files) {
        const client = makeStorageClient();
        const cid = await client.put(files);
        console.log('stored files with cid:', cid);
        return cid;
    }

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

    return (
        <>
            <p>Upload here:</p>
            <input type='file' onChange={handleFileUpload} />
            <button onClick={handleUpload}>Submit</button>

            <div>
                <br /><br /><br />
                <p>Enter CID:</p>
                <input type="text" value={downloadCid} onChange={(event) => setDownloadCid(event.target.value)} />
                <br />
                <br />
                <button onClick={handleDownload}>Download</button>
            </div>
        </>
    );
};

export default App;


// import React, { useEffect, useState } from "react";
// import Web3Connector from "./Web3Connector";
// import Web3 from "web3";
// const Verifying = () => {
//   const [patches, setPatches] = useState([]);
//   const [account, setAccount] = useState("");
//   const [contract1, setContract1] = useState(null);
//   const [contractStatus, setContractStatus] = useState("");

//   useEffect(() => {
//     const fetchPatches = async () => {
//       if (contract1) {
//         console.log(contract1.methods);
//       const fetchedPatches = await contract1.methods.getpatches().call();
//       setPatches(fetchedPatches);
//       console.log(fetchedPatches);
//       }
//     };
//     fetchPatches();
//   }, [contract1]);

//   const handleApprove = async (patchId) => {
//     await contract1.methods.vadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleReject = async (patchId) => {
//     await contract1.methods.rvadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleDownload = async (patchLink, patchFilename) => {
//     const data = await contract1.methods.gettxt(patchLink).call();
//     const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], {
//       type: "application/octet-stream",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = patchFilename;
//     document.body.appendChild(a);
//     a.click();
//   };

//   return (
//     <>
//     <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract1} // Update the contract1 state value
//           setContractStatus={setContractStatus}
//         />
//     <div className="container border border-secondary p-3">
//       <div id="cards">
//         {patches.map((patch) => {
//           if (patch.verstat !== "Inprogress") {
//             return null;
//           }

//           return (
//             <div className="card my-3" key={patch.patchid}>
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       className="btn mx-3 btn-primary"
//                       onClick={() => handleApprove(patch.patchid)}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="btn mx-3 btn-danger"
//                       onClick={() => handleReject(patch.patchid)}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-6 col-sm-4 col-md-6">
//                   <table className="table table-borderless">
//                     <tbody>
//                       {[
//                         "patchid",
//                         "patchfilename",
//                         "patchversion",
//                         "patchplatform",
//                         "timestamp",
//                         "features",
//                       ].map((i) => (
//                         <tr key={i}>
//                           <td>{`${i} :`}</td>
//                           <td>
//                             {i === "timestamp"
//                               ? new Date(patch[i] * 1000).toLocaleString()
//                               : patch[i]}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <button
//                   className="btn btn-light"
//                   onClick={() =>
//                     handleDownload(patch.patchlink, patch.patchfilename)
//                   }
//                 >
//                   Download ({patch.patchfilename})
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Verifying;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
import { Web3Storage } from 'web3.storage';

const Verifying = () => {
  const [patches, setPatches] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");


  useEffect(() => {
    const fetchPatches = async () => {
      if (contract1) {
        const fetchedPatches = await contract1.methods.getpatches().call();
        setPatches(fetchedPatches);
        console.log(fetchedPatches);
      }
    };
    fetchPatches();
  }, [contract1]);

  const handleApprove = async (patchId) => {
    await contract1.methods.vadd(patchId).send({ from: account });
    alert("Successfully Updated");
    // window.location.reload();
  };

  const handleReject = async (patchId) => {
    await contract1.methods.rvadd(patchId).send({ from: account });
    alert("Successfully Updated");
    // window.location.reload();
  };
  const getAccessToken = () => {
    // Insert your API token here as a string
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE4MTRlMTIyMkVhNThFOTE4Q2Q5QzhFMDUzMTkwMzIwYWU4MzZiZjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc4NDM0ODg4OTUsIm5hbWUiOiJoYXJpbmF0aCJ9.2CYsF3tVltDOtg5qVD5FCfE-uEh0n4Lbb8bTs0bCqto';

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
          {patches.map((patch) => {
            if (patch.verstat !== "Inprogress") {
              return null;
            }

            return (
              <div className="card my-3" key={patch.patchid}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn mx-3 btn-primary"
                        onClick={() => handleApprove(patch.patchid)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn mx-3 btn-danger"
                        onClick={() => handleReject(patch.patchid)}
                      >
                        Reject
                      </button>
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
                            <td>{`${i} :`}</td>
                            <td>
                              {i === "timestamp"
                                ? new Date(patch[i] * 1000).toLocaleString()
                                : patch[i]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      handleDownload(patch.patchlink, patch.patchfilename)
                    }
                  >
                    Download ({patch.patchfilename})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Verifying;

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
import { useParams } from "react-router-dom";
import { Web3Storage } from 'web3.storage';

const SetPatchComponent = () => {
  const [ar34, setAr34] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract] = useState(null);
  const [cid1, setCid] = useState("");
  const [contractStatus, setContractStatus] = useState("");
  const { id } = useParams();
  const [patchName, setPatchName] = useState("");
  const [patchFile, setPatchFile] = useState(null);
  const [patchVersion, setPatchVersion] = useState("");
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [features, setFeatures] = useState("");

  useEffect(() => {
    const fetchPatchDetails = async () => {
      if (contract1) {
        const dt5 = await contract1.methods.getarr(id).call();
        console.log(dt5);
        console.log(contract1);
        const ar3 = dt5[1].concat(dt5[2]);
        document.getElementById("input5").value = ar3;
        setAr34(ar3);
        setSelectedSoftware(dt5[0]);
      }
    };

    fetchPatchDetails();
  }, [contract1, id]);
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
  const setPatchDetails = async () => {
    // const fileData = new Uint8Array(await readFileContents(patchFile));
    // console.log(patchName, fileData, patchVersion, selectedSoftware, ar34);
    console.log(contract1.methods);
    console.log("hello");
    if (file) {
      try {
          const cid = await storeFiles([file]);
          setCid(cid);
          console.log('stored files with cid:', cid);
          // Do any further actions after successful upload
      } catch (error) {
          console.error('Failed to store files:', error);
      }
  }
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(patchFile);
    // reader.onload = async ()=>{
    //   let fileData = new Uint8Array(reader.result);
    console.log(patchName, cid1, patchVersion, selectedSoftware, ar34);
    await contract1.methods.addpatch(patchName, cid1, patchVersion, selectedSoftware, ar34)
      .send({ from: account })
      .then(() => {
        alert("Patch info successfully added to blockchain");
      });
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
                <select
                  className="form-select"
                  value={selectedSoftware}
                  onChange={(e) => setSelectedSoftware(e.target.value)}
                >
                  <option selected>Choose software...</option>
                  <option value="chrome">chrome</option>
                  <option value="vscode">vscode</option>
                  <option value="sudoko">sudoku</option>
                </select>
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
        </div>
      </div>
    </>
  );
};

export default SetPatchComponent;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import Web3Connector from "./Web3Connector";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import TransactionTable from "./transactionHistory";
// import Connect from "./Connect";
function Getrpt() {
    const [account, setAccount] = useState("");
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState("");
    const [contractStatus, setContractStatus] = useState("");
    const [software, setSoftware] = React.useState("");
    const options = ['chrome', 'vscode', 'sudoko'];
    // const options2 = [1,2,3,4,5];
    // const onOptionChangeHandler = (event) => {
    //     console.log("User Selected Value - ", event.target.value)
    // }
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     await contract1.methods.addbug(software, version, description, fts).send({ from: account });
    //     console.log("def");
    // };
    const [arr3, setArr3] = useState([]);
    const [arr4, setArr4] = useState([]);
    // const [a, setArr4] = useState([]);
    let a;
    const getreport = async (sft) => {
        // bname=document.getElementById("s4").value;
        const re = [];
        setSoftware(sft);
        await contract1.methods.gbug(sft).call().then(result => {
            setData56(result);
            console.log(result);
        })
        // for (var i = 0; i < result.length; i++) {
        //     if (result[i] && result[i][4] === "0") {
        //         re.push(result[i]);
        //         // arr4.push(data56[i][2]);
        //         // arr4.push(result[i][2]);
        //     }
        // }
        // setData56(re);
        // let data56 = await window.contract1.methods.gbug(sft).call();
        $(function () {
            $('#myTable4').DataTable();
        });
    };
    const handleDropdownChange = (event, index) => {
        const updatedArr3 = [...arr3];
        const updatedArr4 = [...arr4];
        updatedArr3[index] = parseInt(event);
        updatedArr4[index] = data56[index][2];

        // Update the corresponding values in the arrays

        setArr3(updatedArr3);
        setArr4(updatedArr4);
        console.log(arr3, arr4);
    };
    const [arr5, setArr5] = useState([]);
    const submitpr = async () => {
        console.log("hello");
        // const filteredArr4 = arr4.filter((value) => value !== undefined);
        console.log(arr3, arr4);
        // setArr3(filteredArr3);
        // setArr5(filteredArr4);
        for (var i = 0; i < arr3.length; i++) {
            // console.log(filteredArr3[i]);
            console.log("helo");
            if (arr3[i] == NaN || arr3[i]==undefined) {
                // console.log(filteredArr3[i]);
            console.log("helo");
                const newArray = arr4.filter((_, ind) => ind !== i); // Filter out the element at the specified index
                setArr4(newArray);
                
            }
        }
        const filteredArr3 = arr3.filter((value) => value !== undefined && value !== NaN);
        setArr3(filteredArr3);
        console.log(filteredArr3, arr4);
        // console.log(software,filteredArr3, filteredArr4);
        try {
            const result = await contract1.methods.gprior(software, filteredArr3, arr4).send({ from: account });
            await axios.post('http://localhost:5000/labeller/transactions', { roleFunction: "labeller-priority", transactionHash: result.transactionHash });
            console.log('Transaction added successfully');
        }
        catch (error) {
            console.error('Error:', error);
        }
        console.log(filteredArr3, arr4);
        document.getElementById("cona").innerHTML = "priority sent";
    };
    return (
        <>
            <div>
                <p>Account is: {account}</p>
                <p id="contractArea">{contractStatus}</p>
            </div>
            <Web3Connector
                setAccount={setAccount}
                setContract={setContract}
                setContractStatus={setContractStatus}
            />
            {/* <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/grpt">Set Priority</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> */}
            <div class="border border-secondary">
                <div class="col-9 mx-auto my-5">
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label" for="patchNo">Softwares</label>
                        <div class="col-sm class-sm-5 col-lg-4">
                            <select class="form-select" id="software" onChange={(event) => { getreport(event.target.value) }}>
                                <option selected>Choose software...</option>
                                {options.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table id="myTable4" class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    {/* <th>bug id</th> */}
                                    <th>Software</th>
                                    <th>Version</th>
                                    <th>bug description</th>
                                    <th>Features</th>
                                    <th>Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data56.map((row, i) => (
                                    row[4] == 0 ? (
                                        <tr key={i}>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td><select className="dropdown" onChange={(event) => { handleDropdownChange(event.target.value, i) }}>
                                                {/* <option selected>Choose priority...</option>
                                {options2.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option> */}
                                                <option selected>choose priority</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                {/* })} */}
                                            </select></td>
                                            {/* <td>{row[4]}</td> */}
                                        </tr>
                                    ) : null
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button class="btn btn-primary" onClick={submitpr}>submit</button>
                    <p id="cona"></p>
                </div>

            </div>
        </>
    );
}
export default Getrpt;
