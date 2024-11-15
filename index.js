// Import necessary modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(helmet()); //
app.use(morgan('dev')); // Log HTTP requests

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to Douga! Your app is running 🎉');
});

// Start the server
const PORT = process.env.PORT || 3001; // Default port is 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
