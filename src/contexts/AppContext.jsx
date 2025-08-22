import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const initialState = {
  flashcards: [],
  bookmarkedCards: [],
  notes: [],
  quizResults: [],
  currentStreak: 0,
  totalStudyTime: 0,
  preferences: {
    autoFlip: false,
    studyReminders: true,
    difficulty: 'medium'
  }
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, ...action.payload };
    
    case 'BOOKMARK_CARD':
      const isBookmarked = state.bookmarkedCards.includes(action.payload);
      const bookmarkedCards = isBookmarked
        ? state.bookmarkedCards.filter(id => id !== action.payload)
        : [...state.bookmarkedCards, action.payload];
      return { ...state, bookmarkedCards };
    
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: Date.now(), createdAt: new Date().toISOString() }]
      };
    
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note => 
          note.id === action.payload.id ? { ...note, ...action.payload.updates } : note
        )
      };
    
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    
    // Add flashcard creation reducer
    case 'ADD_FLASHCARD':
      return {
        ...state,
        flashcards: [...state.flashcards, action.payload],
      };
    case 'ADD_QUIZ_RESULT':
      return {
        ...state,
        quizResults: [...state.quizResults, action.payload],
        currentStreak: action.payload.score >= 70 ? state.currentStreak + 1 : 0
      };
    
    case 'UPDATE_STUDY_TIME':
      return {
        ...state,
        totalStudyTime: state.totalStudyTime + action.payload
      };
    
    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload }
      };
    
    default:
      return state;
  }
};


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('interviewPrepData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('interviewPrepData', JSON.stringify(state));
  }, [state]);

  const value = {
    ...state,
    dispatch
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}