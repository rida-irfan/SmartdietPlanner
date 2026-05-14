const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required.' });
  }

  console.log('Contact request received:', { email, message });

  // In a production app, you would send an email or save the message.
  res.status(200).json({ message: 'Thank you! Your message has been received.' });
});

module.exports = router;
