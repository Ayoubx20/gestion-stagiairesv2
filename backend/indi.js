const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(express.json());

// Logout endpoint
app.post('/api/logout', (req, res) => {
  // Perform logout logic here
  // For example, destroy session or remove session token from database
  // Send a success response if logout was successful
  res.status(200).send('Logged out successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Endpoint for registering users
app.post('/Signup', (req, res) => {
    const { username, password } = req.body;
    // Your signup logic
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Your login logic
});

// Endpoint for adding user
app.post('/AddUser', (req, res) => {
    const { name, email } = req.body;
    // Your add user logic
});

// Endpoint for fetching user list
app.get('/UserList', (req, res) => {
    // Your user list logic
});

// Endpoint for deleting user by ID
app.delete('/UserList/:id', (req, res) => {
    const userId = req.params.id;
    // Your delete user logic
});

// Endpoint for updating user by ID
app.put('/UpdateUser/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    // Your update user logic
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
    // Perform logout logic here
    // For example, destroy session or remove session token from database
    // Send a success response if logout was successful
    res.status(200).send('Logged out successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
