import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import FlashcardView from './components/Flashcards/FlashcardView';
import QuizView from './components/Quiz/QuizView';
import NotesView from './components/Notes/NotesView';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="flashcards" element={<FlashcardView />} />
              <Route path="quiz" element={<QuizView />} />
              <Route path="notes" element={<NotesView />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;