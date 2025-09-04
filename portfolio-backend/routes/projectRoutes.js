const express = require('express');
const Project = require('../models/project');
const router = express.Router();

// GET all projects
router.get('/', async (req,res) => {
  try {
     const project = await Project.find();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add project (for your own admin use)
router.post('/', async (req, res) => {
  const { title, description, image, link } = req.body;
  const newProject = new Project({ title, description, image, link });
  try {
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
