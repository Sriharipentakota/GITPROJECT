import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Database connection
import connectDB from './utils/db.js';
connectDB();

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});