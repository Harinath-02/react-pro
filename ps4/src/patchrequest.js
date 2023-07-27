import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import Web3Connector from "./Web3Connector";
import $ from "jquery";
import "datatables.net";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Patchrequest() {
    const [account, setAccount] = useState("");
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState(null);
    const [contractStatus, setContractStatus] = useState("");
    const [software, setSoftware] = useState("");
    const options = ["chrome", "vscode", "sudoko"];
    const [bugDescriptions, setBugDescriptions] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const getreport = async (sft) => {
        const re = [];
        setSoftware(sft);
        const result = await contract1.methods.gbug(sft).call();
        console.log(result);
        setData56(result);
    };

    const handleCheckboxChange = (event, index) => {
        let updatedSelectedFeatures = [];
        let updatedBugDescriptions = [];
        const { checked, name } = event.target;
        console.log(index);
        if (name === "bugDescription") {
            if (checked) {
                updatedBugDescriptions = [...bugDescriptions, data56[index][2]];
            } else {
                const indexToRemove = updatedBugDescriptions.indexOf(data56[index][2]);
                if (indexToRemove !== -1) {
                    updatedBugDescriptions.splice(indexToRemove, 1);
                }
            }
            setBugDescriptions(updatedBugDescriptions);
        } else if (name === "feature") {
            if (checked) {
                updatedSelectedFeatures = [...selectedFeatures, data56[index][3]];
            } else {
                const indexToRemove = updatedSelectedFeatures.indexOf(
                    data56[index][3]
                );
                if (indexToRemove !== -1) {
                    updatedSelectedFeatures.splice(indexToRemove, 1);
                }
            }
            setSelectedFeatures(updatedSelectedFeatures);
        }
    };

    const submitpr = async () => {
        if (!contract1) {
            console.error("Contract is not initialized");
            return;
        }

        if (!account) {
            console.error("Account is not set");
            return;
        }

        console.log("Selected Bug Descriptions:", bugDescriptions);
        console.log("Selected Features:", selectedFeatures);
        console.log(software);
        try {
            console.log(process.env.REACT_APP_Admin_Address);
            const result = await contract1.methods
                .gbf(software, bugDescriptions, selectedFeatures)
                .send({ from: process.env.REACT_APP_Admin_Address });
            console.log(result);
            await axios.post("http://localhost:5000/admin/transactions", { roleFunction:"admin-patchrequest", transactionHash:result.transactionHash,from:result.from, to:result.to, gasUsed:parseInt(result.gasUsed.toString()), blockNumber:parseInt(result.blockNumber.toString()) });
            console.log("Transaction added successfully");
            toast.success('Patch Request sent successfully!', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setData56([]);
            // setTimeout(() => {
            //     window.location.reload();
            // }, 4000);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(data56.length>0) {
            $('#myTable4').DataTable();
            $('#myTable5').DataTable();
        };
    }, [data56]);

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
            <div className="border border-secondary">
                <div className="col-8 mx-auto my-5">
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label" htmlFor="patchNo">
                            Softwares
                        </label>
                        <div className="col-sm class-sm-5 col-lg-4">
                            <select
                                className="form-select"
                                id="software"
                                onChange={(event) => {
                                    getreport(event.target.value);
                                }}
                            >
                                <option selected>Choose software...</option>
                                {options.map((option, index) => {
                                    return <option key={index}>{option}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                    <div className=" row ">
                        <div className="table-responsive col  p-3">
                            <table
                                id="myTable4"
                                className="table table-striped table-hover"
                            >
                                <thead>
                                    <tr>
                                        <th>bugs</th>
                                        <th>priority</th>
                                        <th>select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data56.map((row, i) =>
                                        Number(row[5]) === 0 && Number(row[4]) !== 0 ? (
                                            <tr key={i}>
                                                <td>{row[2]}</td>
                                                <td>{row[4]}</td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        name="bugDescription"
                                                        onChange={(event) => handleCheckboxChange(event, i)}
                                                    />
                                                </td>
                                            </tr>
                                        ) : null
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive col p-3">
                            <table
                                id="myTable5"
                                className="table table-striped table-hover"
                            >
                                <thead>
                                    <tr>
                                        <th>Features</th>
                                        <th>select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data56.map((row, i) =>
                                        Number(row[6]) === 0 && Number(row[4]) !== 0 ? (
                                            <tr key={i}>
                                                <td>{row[3]}</td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        name="feature"
                                                        onChange={(event) => handleCheckboxChange(event, i)}
                                                    />
                                                </td>
                                            </tr>
                                        ) : null
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={submitpr}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Patchrequest;
