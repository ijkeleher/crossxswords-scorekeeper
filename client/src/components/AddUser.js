// client/src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name };
    const response = await axios({
      method: "POST",
      data: newUser,
      withCredentials: false,
      url: "http://localhost:8000/api/users",
      headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:3000'
      }
    });
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
