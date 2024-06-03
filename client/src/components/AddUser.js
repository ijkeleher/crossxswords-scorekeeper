// client/src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

// Define the AddUser functional component, which accepts a prop called 'onAdd'
const AddUser = ({ onAdd }) => {
  // Declaring a state variable 'name' with an initial empty string value and a setter 'setName'
  const [name, setName] = useState('');

  // Define the handleSubmit function to handle the form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Create a new user object with the current value of 'name'
    const newUser = { name };

    // Send a POST request to add the new user
    const response = await axios({
      method: "POST", // HTTP method to use
      data: newUser,  // Data to send in the request body
      withCredentials: false, // Do not send cookies with the request
      url: "http://localhost:8000/api/addUsers", // URL endpoint for the request
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000' // Allow CORS from localhost:3000
      }
    });

    // Call the onAdd function passed as a prop with the response data
    onAdd(response.data);

    // Clear the input field by resetting the 'name' state to an empty string
    setName('');
  };

  // Return the JSX for the form
  return (
    <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form's onSubmit event */}
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} // Update the 'name' state on input change
        placeholder="Add user" 
      />
      <button type="submit">Add</button> {/* Submit button to trigger form submission */}
    </form>
  );
};

// Export the AddUser component as the default export
export default AddUser;