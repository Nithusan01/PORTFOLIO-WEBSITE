const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
