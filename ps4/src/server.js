// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const connectionString = process.env.Mongolink;
// console.log(process.env);
// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("connected");
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a MongoDB schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  name1: String,
  name2: String,
  name3: String,
});
const Item = mongoose.model('bugs', itemSchema);
const userSchema = new mongoose.Schema({
  email_1: {
    type: String
  },
  username_1: {
    type: String
  },
  password_1: {
    type: String
  },
  role: {
    type: String,
    enum: ["admin", "enduser", "labeller"],
    default: "enduser",
  },
});



const transactionSchema = new mongoose.Schema({
  transactionHash: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gasUsed: {
    type: Number,
    required: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
});

// Define the collection schema
const collectionSchema = new mongoose.Schema({
  roleFunction: {
    type: String,
    required: true,
  },
  transactions: [transactionSchema],
});

// Create the collections models
const labeller = mongoose.model('labeller', collectionSchema);
const admin = mongoose.model('admin', collectionSchema);
const developer = mongoose.model('developer', collectionSchema);
const verifier = mongoose.model('verifier', collectionSchema);
const addTransaction = async (collectionName, roleFunction, transactionHash, from, to, gasUsed, blockNumber) => {
  try {
    // Find the collection based on the provided collectionName
    let CollectionModel;
    console.log(transactionHash, from, to, gasUsed, blockNumber)

    if (collectionName === 'labeller') {
      CollectionModel = labeller;
    } else if (collectionName === 'admin') {
      CollectionModel = admin;
    } else if (collectionName === 'developer') {
      CollectionModel = developer;
    } else if (collectionName === 'verifier') {
      CollectionModel = verifier;
    } else {
      throw new Error('Invalid collection name');
    }

    // Create a new transaction object
    const newTransaction = {
      transactionHash: transactionHash,
      from:from,
      to: to,
      gasUsed: gasUsed,
      blockNumber:blockNumber,
    };

    // Find the collection
    const collection = await CollectionModel.findOne({ roleFunction });

    if (collection) {
      // Append the new transaction to the transactions array
      collection.transactions.push(newTransaction);
      await collection.save();
    } else {
      // Create a new collection and save the new transaction
      await CollectionModel.create({ roleFunction, transactions: [newTransaction] });
    }

    console.log('Transaction added successfully');
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
};

/// Function to get all transactions from a specific collection
const getTransactions = async (collectionName) => {
  try {
    // Find the collection based on the provided collectionName
    let CollectionModel;
    let roleFunction;

    if (collectionName === 'labeller') {
      CollectionModel = labeller;
      roleFunction = 'Labeller';
    } else if (collectionName === 'admin') {
      CollectionModel = admin;
      roleFunction = 'Admin';
    } else if (collectionName === 'developer') {
      CollectionModel = developer;
      roleFunction = 'Developer';
    } else if (collectionName === 'verifier') {
      CollectionModel = verifier;
      roleFunction = 'Verifier';
    } else {
      throw new Error('Invalid collection name');
    }

    // Find all collections matching the collectionName
    const collections = await CollectionModel.find();

    if (collections.length > 0) {
      // Map the collections to extract roleFunction and transactions
      const transactions = collections.map((collection) => {
        return collection.transactions.map((transaction) => {
          return {
            roleFunction: collection.roleFunction,
            transactionHash: transaction.transactionHash,
            from: transaction.from,
            to: transaction.to,
            date: transaction.date,
            gasUsed: transaction.gasUsed,
            blockNumber: transaction.blockNumber,
          };
        });
      });

      return transactions.flat();
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error getting transactions:', error);
    return [];
  }
};


app.post('/labeller/transactions', (req, res) => {
  //  console.log(req.body);
  const { roleFunction, transactionHash, from, to, gasUsed, blockNumber } = req.body;
  addTransaction('labeller', roleFunction, transactionHash, from, to, gasUsed, blockNumber);
  console.log(transactionHash, from, to, gasUsed, blockNumber);
  res.sendStatus(200);
});

app.post('/admin/transactions', (req, res) => {
  const { roleFunction, transactionHash, from, to, gasUsed, blockNumber } = req.body;
  addTransaction('admin', roleFunction, transactionHash, from, to, gasUsed, blockNumber);
  console.log(transactionHash, from, to, gasUsed, blockNumber);
  res.sendStatus(200);
});

app.post('/developer/transactions', (req, res) => {
  const { roleFunction, transactionHash, from, to, gasUsed, blockNumber } = req.body;
  addTransaction('developer', roleFunction, transactionHash, from, to, gasUsed, blockNumber);
  console.log(transactionHash, from, to, gasUsed, blockNumber);
  res.sendStatus(200);
});

app.post('/verifier/transactions', (req, res) => {
  const { roleFunction, transactionHash, from, to, gasUsed, blockNumber } = req.body;
  addTransaction('verifier', roleFunction, transactionHash, from, to, gasUsed, blockNumber);
  console.log(transactionHash, from, to, gasUsed, blockNumber);
  res.sendStatus(200);
});
app.get('/labeller/transactions', async (req, res) => {
  const transactions = await getTransactions('labeller');
  res.json(transactions);
});
app.get('/admin/transactions', async (req, res) => {
  const transactions = await getTransactions('admin');
  res.json(transactions);
});

// Route to add a new transaction to Collection Three
// app.post('/developer/transactions', (req, res) => {
//   const { roleFunction, transactionHash } = req.body;
//   addTransaction('developer', roleFunction, transactionHash);
//   res.sendStatus(200);
// });

// Route to get all transactions from Collection Three
app.get('/developer/transactions', async (req, res) => {
  const transactions = await getTransactions('developer');
  res.json(transactions);
});

app.get('/verifier/transactions', async (req, res) => {
  const transactions = await getTransactions('verifier');
  res.json(transactions);
});
const User = mongoose.model('ims', userSchema);
app.post('/api/ims', async (req, res) => {
  const { email, username, password } = req.body;

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ email_1: email, username_1: username, password_1: hashedPassword });

  user.save()
    .then(result => {
      console.log(result);
      // Handle successful save
      res.status(200).json({ message: 'User created successfully.' });
    })
    .catch(error => {
      // Handle error
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    });
});

app.post('/api/ims/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username_1: username });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password_1);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }
    else {
      return res.json({ role: user.role, uname: user.username_1 });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});


// Define routes for sending and retrieving data
app.post('/api/items', (req, res) => {
  const newItem = new Item({ name: req.body.software, name1: req.body.version, name2: req.body.description, name3: req.body.fts });
  console.log(newItem);
  newItem.save()
    .then(result => {
      console.log(result);
      // Handle successful save
      res.send("ok");
    })
    .catch(error => {
      // Handle error
      console.log(error);
      res.status(400).json({ error: error});
    });
});
const downloads = new mongoose.Schema({
  username: String,
    downloadedtime: {
      type: Date,
      default: Date.now
    }
});
const downloadSchema = new mongoose.Schema(
  {
    patchname: String,
    software: String,
    downloads: [downloads]
  },
  { versionKey: false } // Exclude the version key (__v)
  );
const downloaded = mongoose.model('downloads', downloadSchema);
  
app.post('/api/downloads', (req, res) => {
  const { software,patchname, username } = req.body;

  downloaded.findOne({ patchname, software })
      .then((result) => {
          if (!result) {
              // If the patchname and software combination doesn't exist, create a new document
              const newItem = new downloaded({
                  patchname,
                  software,
                  downloads: [{ username }]
              });

              newItem.save()
                  .then(() => {
                      console.log('Saved item:', newItem);
                      res.sendStatus(200);
                  })
                  .catch((error) => {
                      console.error('Error saving item:', error);
                      res.sendStatus(500);
                  });
          } else {
              // If the patchname and software combination exists, update the document
              const existingDownload = result.downloads.find((item) => item.username === username);

              if (existingDownload) {
                  // If the username exists, update the downloadedtime
                  existingDownload.downloadedtime = new Date();
              } else {
                  // If the username doesn't exist, add a new object with the username
                  result.downloads.push({ username });
              }

              result.save()
                  .then(() => {
                      console.log('Updated item:', result);
                      res.sendStatus(200);
                  })
                  .catch((error) => {
                      console.error('Error updating item:', error);
                      res.sendStatus(500);
                  });
          }
      })
      .catch((error) => {
          console.error('Error finding item:', error);
          res.sendStatus(500);
      });
});


// app.post('/api/downloads', (req, res) => {
//   const newItem1 = new downloaded({ software: req.body.software, filename: req.body.fname, username: req.body.uname });
//   newItem1
//     .save()
//     .then((result) => {
//       console.log('Saved item:', result);
//       res.sendStatus(200);
//     })

// });
app.get('/api/downloads', (req, res) => {
  downloaded.find({})
      .then((items) => {
          res.status(200).json(items);
      })
      .catch((error) => {
          console.error('Error retrieving items:', error);
          res.sendStatus(500);
        });
});

// app.get('/api/downloads', (req, res) => {
//   downloaded.find({})
//     .then((items) => {
//       res.status(200).json(items);
//     })

// });
/*
app.put('/api/items/:name', (req, res) => {
  const itemName = req.params.name;
  const update = {
    name: req.body.software,
    name1: req.body.version,
    name2: req.body.description,
    name3: req.body.fts,
  };

  Item.findOneAndUpdate({ name: itemName }, update, { new: true })
    .then(updatedItem => {
      if (updatedItem) {
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to update item' });
    });
});*/

app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;

  Item.findByIdAndDelete(itemId)
    .then(deletedItem => {
      if (deletedItem) {
        res.status(200).json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete item' });
    });
});



app.get('/api/items', (req, res) => {
  Item.find({})
    .then(items => {
      res.status(200).json(items);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve items' });
    });
});

// Start the server
// const port = 5000;
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
