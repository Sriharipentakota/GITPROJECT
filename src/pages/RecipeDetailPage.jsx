import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ChefHat, Edit, Trash2, User } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import { useUI } from '../context/UIContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Recipe detail page component
 */
function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipe, deleteRecipe } = useRecipes();
  const { addNotification } = useUI();

  const recipe = getRecipe(id);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      const result = await deleteRecipe(id);
      
      if (result.success) {
        addNotification('Recipe deleted successfully', 'success');
        navigate('/recipes');
      } else {
        addNotification(result.error, 'error');
      }
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Recipe Not Found</h2>
          <p className="text-gray-600 mb-4">The recipe you're looking for doesn't exist.</p>
          <Button as={Link} to="/recipes" variant="primary">
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'text-green-600 bg-green-50 border-green-200',
    Medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    Hard: 'text-red-600 bg-red-50 border-red-200',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Button
          as={Link}
          to="/recipes"
          variant="ghost"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Recipes</span>
        </Button>
      </motion.div>

      {/* Recipe Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden mb-8">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                as={Link}
                to={`/edit-recipe/${recipe.id}`}
                variant="secondary"
                size="sm"
                className="bg-white bg-opacity-90 hover:bg-opacity-100"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                variant="danger"
                size="sm"
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-red-600 hover:text-white"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[recipe.difficulty]}`}>
                {recipe.difficulty}
              </span>
              <span className="text-gray-500 text-sm">{recipe.category}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>

            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{recipe.cookTime} minutes</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 mr-2" />
                <span>{recipe.ingredients.length} ingredients</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Added {recipe.createdAt.toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{ingredient}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.steps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{step}</p>
                </motion.li>
              ))}
            </ol>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;