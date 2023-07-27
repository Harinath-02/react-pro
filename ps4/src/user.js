import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import { BrowserRouter as Router, Routes,useParams, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function User() {
    return (
            <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center">
                                    <Link className="nav-link text-light" to="upatch">patches</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <p>{id}</p> */}
                    <Outlet/>
                </div>
    );
}
export default User;
// server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(()=>{
//   console.log("connected");
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define a MongoDB schema and model
// const itemSchema = new mongoose.Schema({
//   name: String,
//   name1: String,
//   name2: String,
//   name3: String,
// });
// const Item = mongoose.model('bugs', itemSchema);

// // Define routes for sending and retrieving data
// app.post('/api/items', (req, res) => {
//   const newItem = new Item({ name: req.body.software,name1:req.body.version,name2:req.body.description,name3:req.body.fts});
//   console.log(newItem);
//   newItem.save()
//   .then(result => {
//     console.log(result);
//     // Handle successful save
//   })
//   .catch(error => {
//     // Handle error
//     console.log(error);
//   });
// });
// app.put('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const update = {
//     name: req.body.software,
//     name1: req.body.version,
//     name2: req.body.description,
//     name3: req.body.fts,
//   };

//   Item.findByIdAndUpdate(itemId, update, { new: true })
//     .then(updatedItem => {
//       if (updatedItem) {
//         res.status(200).json(updatedItem);
//       } else {
//         res.status(404).json({ error: 'Item not found' });
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to update item' });
//     });
// });
// app.delete('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;

//   Item.findByIdAndDelete(itemId)
//     .then(deletedItem => {
//       if (deletedItem) {
//         res.status(200).json({ message: 'Item deleted successfully' });
//       } else {
//         res.status(404).json({ error: 'Item not found' });
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to delete item' });
//     });
// });

// app.get('/api/items', (req, res) => {
//   Item.find({})
//     .then(items => {
//       res.status(200).json(items);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve items' });
//     });
// });

// // Start the server
// // const port = 5000;
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
