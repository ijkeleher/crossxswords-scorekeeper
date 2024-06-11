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
// In-memory data storage for users
let users = [];

const userObj = {
    userName: "", // name of the athlete
    handicap: 0, // handicap, if any
    numBouts: 0, // number of bouts completed in a pool
    numWins: 0, // number of bouts won
};

// Route to get all users
app.get('/api/getUsers', (req, res) => {
    res.json(users);
});

// Route to add a new user
app.post('/api/addUsers', (req, res) => {
    const user = req.body;
    // users.push(user)
    // we want to transition this over to being a user object
    newUser = new(userObj(user))
    users.push(newUser);
    res.json(newUser.userName);
    // res.json(user)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
