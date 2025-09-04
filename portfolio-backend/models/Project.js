const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  demoUrl: { type: String },
  codeUrl: { type: String }
});

module.exports = mongoose.model('project', projectSchema);
