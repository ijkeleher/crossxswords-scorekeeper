// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();
// Define the port
const PORT = process.env.PORT || 8000;

// Middleware to enable CORS and parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

//for single origin
// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // For legacy browser support
//   }

// app.use(cors(corsOptions));


// In-memory data storage for users
let users = [];

// Route to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Route to add a new user
app.post('/api/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
