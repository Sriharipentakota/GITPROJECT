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
router.post('/bulk-upload', upload.single('file'), async (req, res) => {
  try {
    const { value } = await mammoth.extractRawText({ path: req.file.path });
    const lines = value.split('\n');
    const cards = [];
    const skipped = [];
    let i = 0;

    while (i < lines.length) {
      let question = lines[i].trim();
      if (!question) { i++; continue; }

      // Find answer line
      let answer = '';
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('**Answer:**')) {
        i++;
      }
      if (i < lines.length && lines[i].trim().startsWith('**Answer:**')) {
        // Get answer text (may be multi-line)
        answer = lines[i].replace('**Answer:**', '').trim();
        i++;
        while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith('**Answer:**')) {
          answer += ' ' + lines[i].trim();
          i++;
        }
      }

      if (question && answer) {
        const exists = await Flashcard.findOne({ question });
        if (exists) {
          skipped.push(question);
        } else {
          cards.push({ question, answer });
        }
      }
    }

    await Flashcard.insertMany(cards);
    res.json({ message: 'Bulk upload successful', count: cards.length, skipped });
  } catch (err) {
    res.status(500).json({ message: 'Bulk upload failed', error: err.message });
  }
});

export default router;