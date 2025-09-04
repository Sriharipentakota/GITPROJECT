import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Trash2, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRecipes } from '../context/RecipeContext';
import { useUI } from '../context/UIContext';
import RecipeCard from '../components/recipes/RecipeCard';
import RecipeSearch from '../components/recipes/RecipeSearch';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';

/**
 * Recipes page component
 * Displays user's recipe collection with search and filters
 */
function RecipesPage() {
  const navigate = useNavigate();
  const { recipes, loading, deleteRecipe } = useRecipes();
  const { addNotification, openModal, closeModal } = useUI();
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (recipe) => {
    navigate(`/edit-recipe/${recipe.id}`);
  };

  const handleDelete = (recipe) => {
    openModal(
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Delete Recipe
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete "{recipe.title}"? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => confirmDelete(recipe.id)}
            loading={deletingId === recipe.id}
          >
            Delete Recipe
          </Button>
        </div>
      </div>
    );
  };

  const confirmDelete = async (recipeId) => {
    setDeletingId(recipeId);
    const result = await deleteRecipe(recipeId);
    
    if (result.success) {
      addNotification('Recipe deleted successfully', 'success');
      closeModal();
    } else {
      addNotification(result.error, 'error');
    }
    
    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Recipes</h1>
          <p className="text-gray-600">
            {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} in your collection
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button
            as={Link}
            to="/create-recipe"
            variant="primary"
            size="lg"
            className="flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-5 w-5" />
            <span>Add New Recipe</span>
          </Button>
        </motion.div>
      </div>

      <RecipeSearch />

      {/* Recipes Grid */}
      {recipes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No recipes found
          </h3>
          <p className="text-gray-500 mb-6">
            Start building your recipe collection by adding your first recipe.
          </p>
          <Button as={Link} to="/create-recipe" variant="primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Recipe
          </Button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <RecipeCard
                recipe={recipe}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipesPage;