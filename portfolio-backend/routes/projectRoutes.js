import Router  from 'express';
import Project from "../models/project.js";
const router = Router();

// GET all projects
router.get('/', async (req,res) => {
  try {
     const project = await Project.find();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add project (for your admin use)
router.post('/', async (req, res) => {
  const { title, description, image, tags, demoUrl, codeUrl } = req.body;
  const newProject = new Project({ title, description, image, tags, demoUrl, codeUrl });
  try {
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update an existing project
router.put('/:id', async (req, res) => {
  try {
    const { title, description, image, tags, demoUrl, codeUrl } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, image, tags, demoUrl, codeUrl },
      { new: true } // return the updated document
    );
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a project
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
