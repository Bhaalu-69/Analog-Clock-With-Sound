const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set the static directories to serve CSS, JS, and images
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/favicon', express.static(path.join(__dirname, 'favicon')));

// Route to serve each HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
