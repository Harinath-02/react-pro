import React, { useState,useEffect } from "react";
import Web3Connector from "./Web3Connector";
import $ from "jquery";
import axios from "axios";
import "datatables.net";
function Connect() {
  const [account, setAccount] = useState("");
  const [data56, setData56] = useState([]);
  const [contract1, setContract] = useState("");
  const [contractStatus, setContractStatus] = useState("");
  const options = ['chrome', 'vscode', 'sudoko'];
  useEffect(() => {
    fetchItems();
}, []);
useEffect(() => {
  if (data56.length > 0) {
      $(function () {
          $("#myTable3").DataTable(
              
          );
      });
  }
}, [data56]);

const fetchItems = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/items');
        const items = response.data;

        // Extracting names from the items array
        const names = items.map(item => ({
            _id: item._id,
            name: item.name,
            name1: item.name1,
            name2: item.name2,
            name3: item.name3
        }));
        setData56(names);
        console.log(names);
    } catch (error) {
        console.error(error);
    }
};
  // ... Rest of the code

  return (
    <>
      <div class="border border-secondary">
        <div class="col-8 mx-auto my-5">
                <table id="myTable3" class="table table-striped table-hover table-responsive">
                <thead>
                <tr>
                    {/* <th>bug id</th> */}
                    <th>Software</th>
                    <th>Version</th>
                    <th>bug description</th>
                    <th>Features</th>
                </tr>
                </thead>
                <tbody>
                {data56.map((row, i) => (
                    <tr key={i}>
                    <td>{row.name}</td>
                    <td>{row.name1}</td>
                    <td>{row.name2}</td>
                    <td>{row.name3}</td>
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
