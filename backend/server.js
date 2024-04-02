const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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
    const { email,username, password } = req.body;
    // Simple validation
    if (!email || !password || !username) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }
    // Check if user already exists
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error checking existing user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'email already exists' });
        }
        // Insert new user into database
        connection.query('INSERT INTO users (email,username,password) VALUES (?, ?,?)', [email,username, password], (err) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const {email , password } = req.body;
    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }
    // Check if user exists
    connection.query('SELECT * FROM users WHERE email  = ? AND password = ?', [email , password], (err, results) => {
        if (err) {
            console.error('Error checking user credentials:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    });
});


app.post('/AddUsser', (req, res) => {
    const {name,email,adresse,Ville,telephone,encadrant,sujet} = req.body;
    // Simple validation
    if (!name || !email|| ! adresse || ! Ville || ! telephone || ! encadrant || !sujet  ) {
        return res.status(400).json({ message: 'Please provide both name and email' });
    }
    // Check if user already exists
    connection.query('SELECT * FROM dater WHERE name = ?', [name], (err, results) => {
        if (err) {
            console.error('Error checking existing user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        // Insert new user into database
        connection.query('INSERT INTO dater (name,email,adresse,Ville,telephone,encadrant,sujet) VALUES (?,?,?,?,?,?,?)', [name,email,adresse,Ville,telephone,encadrant,sujet], (err) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

//lister
// Endpoint to fetch user list
app.get('/Usserlist', (req, res) => {
    connection.query('SELECT * FROM dater', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Internal server error');
      } else {
        res.json(results);
      }
    });
  });
  
  // Delete user by ID
  app.delete('/UsserList/:id', (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM dater WHERE id = ?', [userId], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json({ message: 'User deleted successfully' });
    });
  });
  
 // Update user by ID
app.put('/UsserList/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    connection.query('UPDATE dater SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'User updated successfully' });
    });
});

  
  // Update a user by ID
  app.put('/UpdateUser/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ error: 'Please provide both name and email' });
      return;
    }
    connection.query('UPDATE dater SET name = ?, email = ? WHERE id = ?', [name, email, userId], (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json({ message: 'User updated successfully' });
    });
  });


// Endpoint for user login
app.post('/loginadmin', (req, res) => {
    const { username, password } = req.body;
    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide both username and password' });
    }
    // Check if user exists
    connection.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('Error checking user credentials:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    });
});
app.post('/SignupAdmin', (req, res) => {
    const { username, password } = req.body;
    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide both username and password' });
    }
    // Check if user already exists
    connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Error checking existing user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        // Insert new user into database
        connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});






// test
app.patch('/UsserList/:id', (req, res) => {
    const userId = req.params.id;
    const { stageValidated } = req.body;

    connection.query('UPDATE dater SET stageValidated = ? WHERE id = ?', [stageValidated, userId], (err, result) => {
        if (err) {
            console.error('Error updating validation status:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Validation status updated successfully' });
    });
});
app.post('/UsserList/:id/note', (req, res) => {
    const userId = req.params.id;
    const { note } = req.body;
    if (!note) {
        res.status(400).json({ error: 'Please provide a note' });
        return;
    }
    connection.query('UPDATE dater SET note = ? WHERE id = ?', [note, userId], (err, result) => {
        if (err) {
            console.error('Error adding note:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Note added successfully' });
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
