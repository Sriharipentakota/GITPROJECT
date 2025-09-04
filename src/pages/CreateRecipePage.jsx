import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { useUI } from '../context/UIContext';
import RecipeForm from '../components/recipes/RecipeForm';

/**
 * Create recipe page component
 */
function CreateRecipePage() {
  const navigate = useNavigate();
  const { createRecipe } = useRecipes();
  const { addNotification } = useUI();

  const handleSubmit = async (recipeData) => {
    const result = await createRecipe(recipeData);
    
    if (result.success) {
      addNotification('Recipe created successfully!', 'success');
      navigate(`/recipe/${result.recipe.id}`);
    } else {
      addNotification(result.error, 'error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Recipe</h1>
        <p className="text-gray-600">Share your culinary creation with detailed ingredients and steps.</p>
      </div>
      
      <RecipeForm onSubmit={handleSubmit} submitText="Create Recipe" />
    </div>
  );
}

export default CreateRecipePage;