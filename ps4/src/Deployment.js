import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
import $ from "jquery";
import "datatables.net";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Deployment = () => {
    const [data35, setData35] = useState([]);
    const [sr, setSr] = useState('');
    const [account, setAccount] = useState("");
    const [contract1, setContract1] = useState(null);
    const [contractStatus, setContractStatus] = useState("");

    useEffect(() => {
        if (contract1) {
            const fetchData = async () => {
                const response = await contract1.methods.getpatches().call();
                setData35(response);
                $(function () {
                    $('#myTable7').DataTable();
                });
                console.log(response);
            };

            fetchData();
        }
    }, [contract1]);


    const handleDeploy = async (patchId) => {
        try{
            const result=await contract1.methods.dadd(patchId).send({ from: process.env.REACT_APP_Admin_Address});
            await axios.post('http://localhost:5000/admin/transactions', { roleFunction:"admin-deployement", transactionHash:result.transactionHash,from:result.from, to:result.to, gasUsed:parseInt(result.gasUsed.toString()), blockNumber:parseInt(result.blockNumber.toString()) });
            console.log('Transaction added successfully');
        }
        catch (error) {
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

            <div className="border border-secondary table-responsive">
                <div className="col-8 mx-auto my-5">
                    <table id="myTable7" className="table table-striped table-hover" >
                        <thead>
                            <tr>
                                <th>Patch.id</th>
                                <th>Patch_Name</th>
                                <th>Software</th>
                                <th>Features</th>
                                <th>Deployment</th>
                                <th>Deployment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data35.map((patch) => (
                                patch[7] === 'verified' && patch[8] !== 'deployed' && (
                                    <tr key={patch[0]}>
                                        <td>{parseInt(patch[0])}</td>
                                        <td>{patch[1]}</td>
                                        <td>{patch[4]}</td>
                                        <td>{patch[5]}</td>
                                        <td>
                                            <button onClick={() => handleDeploy(patch[0])}>Deploy</button>
                                        </td>
                                        <td>{patch[8]}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Deployment;
