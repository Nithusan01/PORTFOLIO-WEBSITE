import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  demoUrl: { type: String },
  codeUrl: { type: String }
});

export default model('Project', projectSchema);
