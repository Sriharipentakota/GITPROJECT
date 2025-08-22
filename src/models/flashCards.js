import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String },
  difficulty: { type: String },
  tags: [String]
}, { timestamps: true });

export default mongoose.model('Flashcard', flashcardSchema);