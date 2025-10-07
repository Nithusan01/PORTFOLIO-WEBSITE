import Router  from 'express';
import Project from "../models/Projects.js";
const router = Router();

// GET all projects
router.get('/', async (req,res) => {
  try {
     const project = await find();
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

export default router;
