const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

// Serve static files
app.use(express.static('public'));

// Use routes from routes.js
app.use('/', routes);

// Render listens on the environment PORT or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));