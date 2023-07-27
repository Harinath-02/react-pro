import React from 'react';
import ReactDOM from 'react-dom';

function hello() {
  const demo = <h1 style={{ color: 'green' }}>Welcome to kmit</h1>;
  document.getElementById('root').innerHTML = ReactDOM.render(demo, document.getElementById('root'));
}

const App = () => (
  <>
    <button onClick={hello}>welcome</button>
    <p id="root"></p>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
function hello() {
    const demo = <h1 style={{ color: 'green' }}>Welcome to kmit</h1>;
    document.getElementById('root').innerHTML = ReactDOM.render(demo, document.getElementById('root'));
  }

  import React, { useState, useEffect,Outlet,useContext } from "react";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  import Web3 from "web3";
  // import { createContext } from "react";
  // import Adminhome from "./cmeta";
  // import AdminContext from "./createcontext";
  // import Connect from "./Connect";
  function Connect() {
      // let { contractdata, Account } = useContext(AdminContext);
      const [account, setAccount] = useState("");
      const [data56, setData56] = useState([]);
      const [contract1, setContract] = useState("");
      const [contractStatus, setContractStatus] = useState("");
      const options = ['chrome', 'vscode', 'sudoko'];
      // const onOptionChangeHandler = (event) => {
      //     console.log("User Selected Value - ", event.target.value)
      // }
      // const handleSubmit = async (event) => {
      //     event.preventDefault();
      //     await contract1.methods.addbug(software, version, description, fts).send({ from: account });
      //     console.log("def");
      // };
      useEffect(() => {
          const connectMetamask = async () => {
              if (window.ethereum !== "undefined") {
                  try {
                      const accounts = await window.ethereum.request({
                          method: "eth_requestAccounts",
                      });
                      setAccount(accounts[0]);
                  } catch (error) {
                      console.log(error);
                  }
              }
          };
          const connectContract = async () => {
              try {
                  const ABI = [
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "name",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "vers",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "des",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "ft",
                                  "type": "string"
                              }
                          ],
                          "name": "addbug",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "name",
                                  "type": "string"
                              },
                              {
                                  "internalType": "bytes",
                                  "name": "ln",
                                  "type": "bytes"
                              },
                              {
                                  "internalType": "string",
                                  "name": "ver",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "plat",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string[]",
                                  "name": "ft",
                                  "type": "string[]"
                              }
                          ],
                          "name": "addpatch",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "bid",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "count",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "count1",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "_id",
                                  "type": "uint256"
                              }
                          ],
                          "name": "dadd",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "devds",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "devft",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "dlist",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "patid",
                                  "type": "uint256"
                              }
                          ],
                          "name": "download",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "downloaded",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "file",
                          "outputs": [
                              {
                                  "internalType": "bytes",
                                  "name": "",
                                  "type": "bytes"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "name",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string[]",
                                  "name": "ds",
                                  "type": "string[]"
                              },
                              {
                                  "internalType": "string[]",
                                  "name": "ftt",
                                  "type": "string[]"
                              }
                          ],
                          "name": "gbf",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "_id",
                                  "type": "string"
                              }
                          ],
                          "name": "gbug",
                          "outputs": [
                              {
                                  "components": [
                                      {
                                          "internalType": "string",
                                          "name": "appname",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "version",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "description",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "fts",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "uint256",
                                          "name": "prior",
                                          "type": "uint256"
                                      }
                                  ],
                                  "internalType": "struct me.bugreport[]",
                                  "name": "",
                                  "type": "tuple[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "id",
                                  "type": "uint256"
                              }
                          ],
                          "name": "get",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              },
                              {
                                  "internalType": "bytes",
                                  "name": "",
                                  "type": "bytes"
                              },
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string[]",
                                  "name": "",
                                  "type": "string[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "getArray",
                          "outputs": [
                              {
                                  "internalType": "uint256[]",
                                  "name": "",
                                  "type": "uint256[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "apname",
                                  "type": "string"
                              }
                          ],
                          "name": "getarr",
                          "outputs": [
                              {
                                  "components": [
                                      {
                                          "internalType": "string[]",
                                          "name": "ar1",
                                          "type": "string[]"
                                      },
                                      {
                                          "internalType": "string[]",
                                          "name": "ar2",
                                          "type": "string[]"
                                      }
                                  ],
                                  "internalType": "struct me.patchr",
                                  "name": "",
                                  "type": "tuple"
                              }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "getpatches",
                          "outputs": [
                              {
                                  "components": [
                                      {
                                          "internalType": "uint256",
                                          "name": "patchid",
                                          "type": "uint256"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "patchfilename",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "bytes",
                                          "name": "patchlink",
                                          "type": "bytes"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "patchversion",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "patchplatform",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string[]",
                                          "name": "features",
                                          "type": "string[]"
                                      },
                                      {
                                          "internalType": "uint256",
                                          "name": "timestamp",
                                          "type": "uint256"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "verstat",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "string",
                                          "name": "depstat",
                                          "type": "string"
                                      },
                                      {
                                          "internalType": "uint256[]",
                                          "name": "userids",
                                          "type": "uint256[]"
                                      }
                                  ],
                                  "internalType": "struct me.patchinfo[]",
                                  "name": "",
                                  "type": "tuple[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "bytes",
                                  "name": "_f",
                                  "type": "bytes"
                              }
                          ],
                          "name": "gettxt",
                          "outputs": [
                              {
                                  "internalType": "bytes",
                                  "name": "",
                                  "type": "bytes"
                              }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "pidd",
                                  "type": "uint256"
                              }
                          ],
                          "name": "getuids",
                          "outputs": [
                              {
                                  "internalType": "uint256[]",
                                  "name": "",
                                  "type": "uint256[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "name",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string[]",
                                  "name": "bugdes",
                                  "type": "string[]"
                              },
                              {
                                  "internalType": "uint256[]",
                                  "name": "bprior",
                                  "type": "uint256[]"
                              }
                          ],
                          "name": "gprior",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "string",
                                  "name": "name",
                                  "type": "string"
                              },
                              {
                                  "internalType": "bytes",
                                  "name": "ln",
                                  "type": "bytes"
                              },
                              {
                                  "internalType": "string",
                                  "name": "ver",
                                  "type": "string"
                              },
                              {
                                  "internalType": "string",
                                  "name": "plat",
                                  "type": "string"
                              }
                          ],
                          "name": "hashid",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "patchidarr",
                          "outputs": [
                              {
                                  "internalType": "uint256[]",
                                  "name": "",
                                  "type": "uint256[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "pid",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "plist",
                          "outputs": [
                              {
                                  "internalType": "string",
                                  "name": "",
                                  "type": "string"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "_id",
                                  "type": "uint256"
                              }
                          ],
                          "name": "rvadd",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "_id",
                                  "type": "uint256"
                              }
                          ],
                          "name": "vadd",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                      },
                      {
                          "inputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "name": "verified",
                          "outputs": [
                              {
                                  "internalType": "uint256",
                                  "name": "",
                                  "type": "uint256"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      },
                      {
                          "inputs": [],
                          "name": "vpatchidarr",
                          "outputs": [
                              {
                                  "internalType": "uint256[]",
                                  "name": "",
                                  "type": "uint256[]"
                              }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                      }
                  ];
                  const Address = "0xDdC966f24103e1839C31c0eAE7CeD29A80BBC529";
                  const web3 = new Web3(window.ethereum);
                  const contract1 = new web3.eth.Contract(ABI, Address);
                  setContract(contract1);
                  setContractStatus("Connection Status: Success");
              } catch (error) {
                  console.log(error);
              }
          };
          connectMetamask();
          connectContract();
      }, []);
      const getreport2 = async (sft) => {
          // bname=document.getElementById("s4").value;
          const result = await contract1.methods.gbug(sft).call();
          setData56(result);
          // let data56 = await window.contract1.methods.gbug(sft).call();
          console.log(data56);
      };
      console.log(data56);
  
      return (
          <>
          <div>
                  <p>Account is: {account}</p>
  
              </div>
              {/* <div class="container my-5">
                      <nav class="navbar navbar-expand-sm bg-secondary">
                          <div class="container-fluid">
                              <ul class="navbar-nav w-100">
                                  <li class="nav-item col-sm text-center">
                                      <Link className="nav-link text-light" to="/report">Report</Link>
                                  </li>
                                  <li class="nav-item col-sm text-center active">
                                      <Link className="nav-link text-light" to="/Connect">Get Report</Link>
                                  </li>
                                  <li class="nav-item col-sm text-center active">
                                      <Link className="nav-link text-light" to="/grpt">Set Priority</Link>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div> */}
          <div class="border border-secondary">
          <div class="col-8 mx-auto my-5">
                  <div class="row mb-3">
                      <label class="col-sm-4 col-form-label" htmlFor="patchNo">Softwares</label>
                      <div class="col-sm class-sm-5 col-lg-4">
                      <select className="form-select" id="software" onChange={(event) =>getreport2(event.target.value)}>
                              <option selected>Choose software...</option>
                              {options.map((option, index) => {
                                  return <option key={index} >
                                      {option}
                                  </option>
                              })}
                            </select>
                      </div>
                  </div>
                  <table id="myTable3" class="table table-striped table-hover">
                  <thead>
                  <tr>
                      <th>bug id</th>
                      <th>Software</th>
                      <th>Version</th>
                      <th>bug description</th>
                      <th>Features</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data56.map((row, i) => (
                      <tr key={i}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      {/* <td>{row[4]}</td> */}
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
          </>
        );
  }
  export default Connect;