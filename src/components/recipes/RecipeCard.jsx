import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

/**
 * Recipe card component for displaying recipe previews
 */
function RecipeCard({ recipe, onEdit, onDelete }) {
  const difficultyColors = {
    Easy: 'text-green-600 bg-green-50',
    Medium: 'text-yellow-600 bg-yellow-50',
    Hard: 'text-red-600 bg-red-50',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onEdit(recipe);
              }}
              className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-sm"
              aria-label="Edit recipe"
            >
              <Edit className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete(recipe);
              }}
              className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-sm"
              aria-label="Delete recipe"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[recipe.difficulty]}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        <div className="p-6">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
              {recipe.title}
            </h3>
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {recipe.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{recipe.cookTime}m</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-4 w-4 mr-1" />
                <span>{recipe.ingredients.length} ingredients</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">
              {recipe.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default RecipeCard;