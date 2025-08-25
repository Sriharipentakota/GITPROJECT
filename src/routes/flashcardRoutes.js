import express from 'express';
import Flashcard from '../models/flashCards.js';
import multer from 'multer';
import mammoth from 'mammoth'; // For .docx parsing

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get all flashcards
// Get all flashcardsa
router.get('/', async (req, res) => {
  const cards = await Flashcard.find();
  res.json(cards);
});
// Create flashcard
router.post('/', async (req, res) => {
  const exists = await Flashcard.findOne({ question: req.body.question });
  if (exists) {
    return res.status(409).json({ message: 'Question already exists' });
  }
  const card = new Flashcard(req.body);
  await card.save();
  res.status(201).json(card);
});

// Update flashcard
router.put('/:id', async (req, res) => {
  const card = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(card);
});

// Delete flashcard
router.delete('/:id', async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Bulk upload flashcards from Word doc
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
router.post('/bulk-upload', upload.single('file'), async (req, res) => {
  try {
    const { value } = await mammoth.extractRawText({ path: req.file.path });
    console.log(value, "extracted text");

    // Split by double newlines or single newlines (handles both cases)
    const blocks = value.split(/\n\s*\n|(?=What )/).filter(b => b.trim().length > 0);

    const cards = [];
    const skipped = [];

    for (let block of blocks) {
      // Extract fields using regex
      const questionMatch = block.match(/^(.*?)Answer:/s);
      const answerMatch = block.match(/Answer:\s*(.*?)Category:/s);
      const categoryMatch = block.match(/Category:\s*(.*?)Difficulty:/s);
      const difficultyMatch = block.match(/Difficulty:\s*(.*?)Tags:/s);
      const tagsMatch = block.match(/Tags:\s*(.*)$/s);

      const question = questionMatch ? questionMatch[1].trim() : '';
      const answer = answerMatch ? answerMatch[1].trim() : '';
      const category = categoryMatch ? categoryMatch[1].trim() : '';
      // Difficulty is optional, you can add it if your model supports it
      const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [];

      if (question && answer) {
        const exists = await Flashcard.findOne({ question });
        if (exists) {
          skipped.push(question);
        } else {
          cards.push({ question, answer, category, tags, difficulty: difficultyMatch ? difficultyMatch[1].trim() : '' });
        }
      }
    }

    await Flashcard.insertMany(cards);
    res.json({ message: 'Bulk upload successful', count: cards.length, skipped });
  } catch (err) {
    res.status(500).json({ message: 'Bulk upload failed', error: err.message });
  }
});
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...
// ...existing code...

export default router;