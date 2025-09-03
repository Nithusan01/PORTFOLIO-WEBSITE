const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { name, email, message,number } = req.body;

  // Save message to DB
  const newMessage = new Message({ name, email, message,number });
  const savedMessage = await newMessage.save();

  const date = savedMessage.date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message + `\n\nReply to: ${email}\n\nNumber: ${number}\n\nDate: ${date}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent & message saved!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

module.exports = router;
