import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/items', { name: newItemName });
      setItems([...items, response.data]);
      setNewItemName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default App;