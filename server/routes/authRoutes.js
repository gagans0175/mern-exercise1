
const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('Sign Up');
})

router.post('/signin', (req, res) => {
  res.send('Sign Up');
})
