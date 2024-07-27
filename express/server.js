// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Enable CORS and body parsing
app.use(cors());
app.use(bodyParser.json());

// Sample JSON data
let data = {
  name: 'Archebus',
};

// Endpoint to serve JSON data
app.get('/data', (req, res) => {
  res.json(data);
});

// Endpoint to update JSON data
app.post('/data', (req, res) => {
  data.name = req.body.name;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});