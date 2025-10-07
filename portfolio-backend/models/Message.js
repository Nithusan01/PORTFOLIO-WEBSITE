import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  number: String,
  date: { type: Date, default: Date.now }
});

export default model('Message', messageSchema);
