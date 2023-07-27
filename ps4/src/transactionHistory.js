import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import $ from "jquery";
import "datatables.net";
const TransactionTable = ({ collectionName }) => {
  const [transactions, setTransactions] = useState([]);
  // const [activeAccordion, setActiveAccordion] = useState(null);
  const [roleFunc, setRoleFunc] = useState([]);
  // const [modalText, setModalText] = useState('');

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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${collectionName}/transactions`);
        console.log(response.data);
        const transactionsWithDetails = [];
          // Check if transactions is defined and is an array
          if (transactions) {
            response.data.map(async (transaction) => {
              const details = transaction;
              transactionsWithDetails.push(details);
              // console.log(details);
            });
          }
    
        transactionsWithDetails.sort((a, b) => b.blockNumber - a.blockNumber);
        // console.log(transactionsWithDetails);
        setTransactions(transactionsWithDetails);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchData();
  }, [collectionName]);

  return (
    <div className="container">
      <h1 className=" text-center  ">Transaction Details - {collectionName}</h1>
      <br />

      <div className=" container accordion  col-12  justify-content-center align-items-center" id="transactionAccordion">
        {transactions != null ? (transactions.map((transaction, index) => (
          <div className="accordion-item" key={transaction.transactionHash}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                <span className="me-3" style={{ maxWidth: '80%' }}>{transaction.roleFunction}</span>
                <span className="text-wrap text-break ms-3">Transaction Hash: {transaction.transactionHash.toString()}</span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">
                {/* <p className="mb-2"><strong>Transaction Hash:</strong> <span className="text-wrap text-break">{transaction.transactionHash}</span></p> */}
                <p className="mb-2"><strong>From:</strong> <span className="text-wrap text-break">{transaction.from}</span></p>
                <p className="mb-2"><strong>To:</strong> <span className="text-wrap text-break">{transaction.to}</span></p>
                <p className="mb-2"><strong>Date:</strong> {formatDate(transaction.date)}</p>
                <p className="mb-2"><strong>Gas Used:</strong> {parseInt(transaction.gasUsed)}</p>
                {/* <p className="mb-2"><strong>Status:</strong> {parseInt(transaction.status)}</p> */}
                {/* <p className="mb-2"><strong>Block Hash:</strong> <span className="text-wrap text-break">{transaction.blockHash}</span></p> */}
                <p className="mb-2"><strong>Block Number:</strong> {parseInt(transaction.blockNumber)}</p>
                {/* <p className="mb-2"><strong>Cumulative Gas Used:</strong> {parseInt(transaction.cumulativeGasUsed)}</p> */}
              </div>
            </div>
          </div>
        ))) : (
          <div>
            <p colSpan="5">No data available</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default TransactionTable;
