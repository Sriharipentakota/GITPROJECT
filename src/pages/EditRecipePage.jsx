import { useNavigate, useParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { useUI } from '../context/UIContext';
import RecipeForm from '../components/recipes/RecipeForm';
import LoadingSpinner from '../components/ui/LoadingSpinner';

/**
 * Edit recipe page component
 */
function EditRecipePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getRecipe, updateRecipe } = useRecipes();
  const { addNotification } = useUI();

  const recipe = getRecipe(id);

  const handleSubmit = async (recipeData) => {
    const result = await updateRecipe(id, recipeData);
    
    if (result.success) {
      addNotification('Recipe updated successfully!', 'success');
      navigate(`/recipe/${id}`);
    } else {
      addNotification(result.error, 'error');
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Recipe Not Found</h2>
          <p className="text-gray-600">The recipe you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Recipe</h1>
        <p className="text-gray-600">Update your recipe details and instructions.</p>
      </div>
      
      <RecipeForm 
        initialData={recipe}
        onSubmit={handleSubmit} 
        submitText="Update Recipe" 
      />
    </div>
  );
}

export default EditRecipePage;