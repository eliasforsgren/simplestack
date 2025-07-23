const express = require('express');
const path = require('path');

const app = express();

// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.html'));
});

app.get('/sign-up', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// ✅ Use Render's assigned port OR 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));