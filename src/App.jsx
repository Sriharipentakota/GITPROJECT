import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const RecipesPage = lazy(() => import('./pages/RecipesPage'));
const RecipeDetailPage = lazy(() => import('./pages/RecipeDetailPage'));
const CreateRecipePage = lazy(() => import('./pages/CreateRecipePage'));
const EditRecipePage = lazy(() => import('./pages/EditRecipePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));

/**
 * Main App component with routing and authentication protection
 */
function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/recipes" /> : <LoginPage />} 
          />
          <Route 
            path="/signup" 
            element={user ? <Navigate to="/recipes" /> : <SignUpPage />} 
          />
          <Route 
            path="/forgot-password" 
            element={user ? <Navigate to="/recipes" /> : <ForgotPasswordPage />} 
          />

          {/* Protected routes */}
          <Route 
            path="/recipes" 
            element={user ? <RecipesPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/recipe/:id" 
            element={user ? <RecipeDetailPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/create-recipe" 
            element={user ? <CreateRecipePage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/edit-recipe/:id" 
            element={user ? <EditRecipePage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile" 
            element={user ? <ProfilePage /> : <Navigate to="/login" />} 
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;