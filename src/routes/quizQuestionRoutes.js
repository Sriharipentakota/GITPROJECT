import express from 'express';
import QuizQuestion from '../models/QuizQuestion.js';
import multer from 'multer';
import mammoth from 'mammoth';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get all quiz questions
router.get('/', async (req, res) => {
  const questions = await QuizQuestion.find();
  res.json(questions);
});

// Create quiz question
router.post('/', async (req, res) => {
  const exists = await QuizQuestion.findOne({ question: req.body.question });
  if (exists) {
    return res.status(409).json({ message: 'Question already exists' });
  }
  const question = new QuizQuestion(req.body);
  await question.save();
  res.status(201).json(question);
});

// Update quiz question
router.put('/:id', async (req, res) => {
  const question = await QuizQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(question);
});

// Delete quiz question
router.delete('/:id', async (req, res) => {
  await QuizQuestion.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Bulk upload quiz questions from Word doc
router.post('/bulk-upload', upload.single('file'), async (req, res) => {
  try {
    const { value } = await mammoth.extractRawText({ path: req.file.path });
    // Parse value to extract questions/options/answers (customize as needed)
    // Example: Each block of 3 lines: question, options (comma separated), answer
    const lines = value.split('\n').filter(Boolean);
    const questions = [];
    const skipped = [];
    for (let i = 0; i < lines.length; i += 3) {
      if (lines[i] && lines[i+1] && lines[i+2]) {
        const exists = await QuizQuestion.findOne({ question: lines[i] });
        if (exists) {
          skipped.push(lines[i]);
          continue;
        }
        questions.push({
          question: lines[i],
          options: lines[i+1].split(',').map(opt => opt.trim()),
          answer: lines[i+2]
        });
      }
    }
    await QuizQuestion.insertMany(questions);
    res.json({ message: 'Bulk upload successful', count: questions.length, skipped });
  } catch (err) {
    res.status(500).json({ message: 'Bulk upload failed', error: err.message });
  }
});

export default router;