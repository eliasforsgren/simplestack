const express = require('express');
const app = express();
const path = require('path');

// Serve all static files from /public
app.use(express.static('.'));

// Routes for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/landing.html'));
});

app.get('/sign-in', (req, res) => {
  res.sendFile(path.resolve('public/sign-in.html'));
});

app.get('/sign-up', (req, res) => {
  res.sendFile(path.resolve('public/sign-up.html'))
})

app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));