import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat, User, LogOut, Plus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

/**
 * Header component with navigation and user menu
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ChefHat className="h-8 w-8" />
            <span className="text-xl font-bold">RecipeBook</span>
          </Link>

          {/* Desktop Navigation */}
          {user && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/recipes"
                className={`font-medium transition-colors ${
                  isActive('/recipes') 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                My Recipes
              </Link>
              <Button
                as={Link}
                to="/create-recipe"
                variant="primary"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Plus className="h-4 w-4" />
                <span>Add Recipe</span>
              </Button>
            </nav>
          )}

          {/* User Menu / Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="hidden sm:block font-medium text-gray-700">{user.name}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="font-medium text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Sign In
                </Link>
                <Button as={Link} to="/signup" variant="primary" size="sm">
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            {user && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {user && isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/recipes"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive('/recipes') 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Recipes
              </Link>
              <Link
                to="/create-recipe"
                className="px-3 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors flex items-center space-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Plus className="h-4 w-4" />
                <span>Add Recipe</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;