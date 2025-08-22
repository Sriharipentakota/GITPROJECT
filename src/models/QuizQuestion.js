import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
  category: { type: String },
  difficulty: { type: String },
  tags: [String]
}, { timestamps: true });

export default mongoose.model('QuizQuestion', quizQuestionSchema);