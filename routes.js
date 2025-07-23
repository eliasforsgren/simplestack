// routes.js
const path = require('path');
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

router.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.html'));
});

router.get('/sign-up', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

module.exports = router;