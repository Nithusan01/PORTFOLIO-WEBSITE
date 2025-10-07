import express from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/Message.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message, number } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Save message to DB
    const newMessage = new Message({ name, email, message, number });
    const savedMessage = await newMessage.save();

    const date = savedMessage.date
      ? savedMessage.date.toLocaleString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      : new Date().toLocaleString();

    // Mail setup
   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});


    const mailOptions = {
      from: `"${name}" <${email}>`, // safer email formatting
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `${message}\n\nReply to: ${email}\nPhone: ${number || 'N/A'}\nDate: ${date}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: '✅ Email sent & message saved successfully!',
    });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({
      success: false,
      message: '❌ Error sending email or saving message.',
      error: err.message,
    });
  }
});

export default router;
