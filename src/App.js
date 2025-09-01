import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import authRoutes from './routes/auth.js';
import flashcardRoutes from './routes/flashcardRoutes.js';
import quizQuestionRoutes from './routes/quizQuestionRoutes.js';
import connectDB from './utils/db.js';
import notesRouter from './routes/notes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/notes', notesRouter);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/quiz-questions', quizQuestionRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});