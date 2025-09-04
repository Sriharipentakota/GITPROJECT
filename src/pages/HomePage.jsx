import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Search, Users, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

/**
 * Home page component
 * Landing page with hero section and features
 */
function HomePage() {
  const { user } = useAuth();

  const features = [
    {
      icon: <ChefHat className="h-8 w-8 text-primary-600" />,
      title: 'Organize Recipes',
      description: 'Keep all your favorite recipes in one place with detailed ingredients and steps.'
    },
    {
      icon: <Search className="h-8 w-8 text-secondary-600" />,
      title: 'Smart Search',
      description: 'Find recipes quickly by ingredients, cuisine type, or cooking time.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent-600" />,
      title: 'Share & Discover',
      description: 'Share your creations and discover amazing recipes from other cooks.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Personal 
              <span className="block text-secondary-300">Recipe Collection</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Organize, search, and share your favorite recipes. Create a beautiful digital cookbook that's always at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <>
                  <Button 
                    as={Link} 
                    to="/recipes" 
                    variant="primary" 
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-100 shadow-lg"
                  >
                    View My Recipes
                  </Button>
                  <Button 
                    as={Link} 
                    to="/create-recipe" 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Add New Recipe
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    as={Link} 
                    to="/signup" 
                    variant="primary" 
                    size="lg"
                    className="text-primary-600 hover:bg-gray-100 shadow-lg"
                  >
                    Get Started Free
                  </Button>
                  <Button 
                    as={Link} 
                    to="/login" 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Recipe Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple meal planning to complex cooking projects, RecipeBook has the tools you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Cooking?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of home cooks who've organized their recipes with RecipeBook.
              </p>
              <Button as={Link} to="/signup" variant="primary" size="lg">
                Create Your Free Account
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;