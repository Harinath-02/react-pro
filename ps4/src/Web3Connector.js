import { useEffect, useState } from "react";
import Web3 from "web3";

function Web3Connector({ setAccount, setContract, setContractStatus }) {

    useEffect(() => {
        const { ethereum } = window;
        const connectMetamask = async () => {
            if (ethereum !== "undefined") {
                try {
                    const accounts = await ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    setAccount(accounts[0]);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        const connectContract = async () => {
            const { ethereum } = window;
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
                                "internalType": "uint256",
                                "name": "rid2",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "ln",
                                "type": "string"
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
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "breqstatus",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "freq",
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
                                "internalType": "uint256",
                                "name": "num",
                                "type": "uint256"
                            }
                        ],
                        "name": "getarr",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
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
                            },
                            {
                                "internalType": "string[]",
                                "name": "",
                                "type": "string[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
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
                            }
                        ],
                        "stateMutability": "view",
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
                                        "internalType": "string",
                                        "name": "patchlink",
                                        "type": "string"
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
                                        "internalType": "uint256",
                                        "name": "rrid",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "patchver",
                                        "type": "uint256"
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
                        "inputs": [],
                        "name": "rcount",
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
                        "name": "reqcount",
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
                                "name": "_id1",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "ptch",
                                "type": "string"
                            }
                        ],
                        "name": "reupload",
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
                            },
                            {
                                "internalType": "string",
                                "name": "rsn",
                                "type": "string"
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
                const Address = "0xD866733c3B16Ad71d781Cf1395EC2Ec186F4c1F2";
                const web3 = new Web3(ethereum);
                const contract1 = new web3.eth.Contract(ABI, Address);
                setContract(contract1);
                setContractStatus("Connection Status: Success");
            } catch (error) {
                console.log(error);
            }
        };

        connectMetamask();
        connectContract();
    }, [setAccount, setContract, setContractStatus]);

    return null; // Since this component doesn't render anything
}

export default Web3Connector;
