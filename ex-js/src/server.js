const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint to serve JSON data
app.get('/dataSet.json', (req, res) => {
  const filePath = path.join(__dirname, 'dataSet.json');

  // Create a read stream for the JSON file
  const stream = fs.createReadStream(filePath);

  // Set appropriate Content-Type header
  res.setHeader('Content-Type', 'application/json');

  // Pipe the stream to the response object
  stream.pipe(res);

  // Handle errors
  stream.on('error', (err) => {
    console.error('Error streaming JSON data:', err);
    res.status(500).send('Internal Server Error');
  });
});

// Route handler for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
