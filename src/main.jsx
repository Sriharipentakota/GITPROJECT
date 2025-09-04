import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { RecipeProvider } from './context/RecipeContext.jsx';
import { UIProvider } from './context/UIContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecipeProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </RecipeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);