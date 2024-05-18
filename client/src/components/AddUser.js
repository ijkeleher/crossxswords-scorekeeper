// client/src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name };
    const response = await axios.post('http://localhost:5000/api/users', newUser);
    onAdd(response.data);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Add user" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
