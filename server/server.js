const path = require('path')
const express = require('express')

const server = express()
const bodyParser = require('body-parser');
const functions = require("firebase-functions")
const cors = require('cors'); 
// Apply CORS middleware to allow all origins for development (adjust for production)
server.use(cors({ origin: true }));

server.use(bodyParser.json()); // Parse JSON data from requests
server.use(express.static(path.join(__dirname, 'public'))) // Serve static files from public folder

server.post('/api/users', async (req, res) => {
  try {
    // Validate data (consider using a library for advanced validation)
    console.log("body", req.body)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for email uniqueness using Mongoose (optional)
    // ... (your logic using Mongoose here)

    // Create a new user (optional, if using Mongoose)
    // ... (your logic using Mongoose here)

    // Respond with success message and optionally include saved user data
    return res.status(201).json({ message: 'User created successfully', data: req.body }); // Adjust response as needed
  } catch (error) {
    console.error('Error saving user data:', error);
    return res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
  }
});
server.get('/api/name', async(req, res) => {
    res.status(200).json({ message: 'Hello Firebase!' });
  });

// exports.createUser = functions.https.onRequest(server); 
module.exports = server


// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser'); // To parse request body data
// const mongoose = require('mongoose'); // For connecting to a MongoDB database (optional)

// const app = express();
// const port = process.env.PORT || 3000; // Use environment variable or default port

// Serve static files from the 'public' directory (optional)
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware
// app.use(bodyParser.json()); // Parse JSON data from requests

// // Connect to MongoDB database (replace with your connection string)
// // Consider using a separate Mongoose connection file for better organization
// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// Define a User model (optional, for data validation and storage)
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true }, // Unique email for validation
//   password: { type: String, required: true } // Consider hashing passwords for security
// });

// const User = mongoose.model('User', userSchema);

// API endpoint to handle user data submission
// app.post('/api/users', async (req, res) => {
//   try {
//     // Validate data (consider using a library for advanced validation)
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Check for email uniqueness using Mongoose (optional)
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'Email already exists' });
//     }

//     // Create a new user (optional, if using Mongoose)
//     const newUser = new User({ name, email, password });
//     const savedUser = await newUser.save();

//     // Respond with success message and optionally include saved user data
//     return res.status(201).json({ message: 'User created successfully', data: savedUser }); // Adjust response as needed
//   } catch (error) {
//     console.error('Error saving user data:', error);
//     return res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));

// module.exports = app;
