import { useState } from 'react';
import { Plus, X, Clock, Users } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

/**
 * Recipe form component for creating and editing recipes
 */
function RecipeForm({ initialData = {}, onSubmit, submitText = 'Save Recipe' }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    ingredients: [''],
    steps: [''],
    image: '',
    cookTime: '',
    difficulty: 'Easy',
    ...initialData
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.cookTime || formData.cookTime < 1) newErrors.cookTime = 'Cook time must be at least 1 minute';
    
    const validIngredients = formData.ingredients.filter(ing => ing.trim());
    if (validIngredients.length === 0) newErrors.ingredients = 'At least one ingredient is required';
    
    const validSteps = formData.steps.filter(step => step.trim());
    if (validSteps.length === 0) newErrors.steps = 'At least one step is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    const cleanedData = {
      ...formData,
      ingredients: formData.ingredients.filter(ing => ing.trim()),
      steps: formData.steps.filter(step => step.trim()),
      cookTime: parseInt(formData.cookTime),
    };

    await onSubmit(cleanedData);
    setLoading(false);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Recipe Title"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            error={errors.title}
            placeholder="Enter recipe title"
          />
          
          <Input
            label="Category"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            error={errors.category}
            placeholder="e.g., Italian, Mexican, Dessert"
          />
        </div>

        <Input
          label="Description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          error={errors.description}
          placeholder="Brief description of your recipe"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock className="h-4 w-4 inline mr-1" />
              Cook Time (minutes)
            </label>
            <Input
              type="number"
              value={formData.cookTime}
              onChange={(e) => handleInputChange('cookTime', e.target.value)}
              error={errors.cookTime}
              placeholder="30"
              min="1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              value={formData.difficulty}
              onChange={(e) => handleInputChange('difficulty', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <Input
          label="Image URL"
          value={formData.image}
          onChange={(e) => handleInputChange('image', e.target.value)}
          placeholder="https://example.com/recipe-image.jpg"
        />

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients
          </label>
          <div className="space-y-2">
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={ingredient}
                  onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem('ingredients', index)}
                  disabled={formData.ingredients.length === 1}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addArrayItem('ingredients')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Ingredient
            </Button>
          </div>
          {errors.ingredients && (
            <p className="text-sm text-red-600 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instructions
          </label>
          <div className="space-y-2">
            {formData.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-2">
                  {index + 1}
                </span>
                <textarea
                  value={step}
                  onChange={(e) => handleArrayChange('steps', index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  rows="2"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem('steps', index)}
                  disabled={formData.steps.length === 1}
                  className="mt-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addArrayItem('steps')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Step
            </Button>
          </div>
          {errors.steps && (
            <p className="text-sm text-red-600 mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button
            type="submit"
            variant="primary"
            loading={loading}
            className="px-8"
          >
            {submitText}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default RecipeForm;