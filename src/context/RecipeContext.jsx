import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const RecipeContext = createContext();

/**
 * Recipe context provider
 * Manages recipe data and operations
 */
export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { user } = useAuth();

  // Sample recipes for demonstration
  useEffect(() => {
    if (user && recipes.length === 0) {
      const sampleRecipes = [
        {
          id: '1',
          title: 'Classic Margherita Pizza',
          description: 'A traditional Italian pizza with fresh mozzarella, tomatoes, and basil.',
          category: 'Italian',
          ingredients: [
            '1 pizza dough',
            '1/2 cup marinara sauce',
            '8 oz fresh mozzarella',
            'Fresh basil leaves',
            '2 tbsp olive oil'
          ],
          steps: [
            'Preheat oven to 475°F (245°C)',
            'Roll out pizza dough on floured surface',
            'Spread marinara sauce evenly',
            'Add torn mozzarella pieces',
            'Bake for 10-12 minutes until golden',
            'Top with fresh basil and drizzle with olive oil'
          ],
          image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
          createdAt: new Date('2024-01-15'),
          userId: user.id,
          cookTime: 25,
          difficulty: 'Easy'
        },
        {
          id: '2',
          title: 'Creamy Chicken Alfredo',
          description: 'Rich and creamy pasta dish with tender chicken and parmesan.',
          category: 'Italian',
          ingredients: [
            '1 lb fettuccine pasta',
            '2 chicken breasts',
            '1 cup heavy cream',
            '1 cup parmesan cheese',
            '4 cloves garlic',
            'Salt and pepper'
          ],
          steps: [
            'Cook pasta according to package directions',
            'Season and cook chicken until golden',
            'Sauté garlic in butter',
            'Add cream and simmer',
            'Stir in parmesan cheese',
            'Combine with pasta and chicken'
          ],
          image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
          createdAt: new Date('2024-01-10'),
          userId: user.id,
          cookTime: 30,
          difficulty: 'Medium'
        }
      ];
      setRecipes(sampleRecipes);
    }
  }, [user]);

  const createRecipe = async (recipeData) => {
    try {
      setLoading(true);
      const newRecipe = {
        ...recipeData,
        id: Date.now().toString(),
        userId: user.id,
        createdAt: new Date(),
      };
      setRecipes(prev => [newRecipe, ...prev]);
      return { success: true, recipe: newRecipe };
    } catch (error) {
      return { success: false, error: 'Failed to create recipe' };
    } finally {
      setLoading(false);
    }
  };

  const updateRecipe = async (id, updates) => {
    try {
      setLoading(true);
      setRecipes(prev => 
        prev.map(recipe => 
          recipe.id === id ? { ...recipe, ...updates } : recipe
        )
      );
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to update recipe' };
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      setLoading(true);
      setRecipes(prev => prev.filter(recipe => recipe.id !== id));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to delete recipe' };
    } finally {
      setLoading(false);
    }
  };

  const getRecipe = (id) => {
    return recipes.find(recipe => recipe.id === id);
  };

  // Filter and search recipes
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filterCategory === 'all' || recipe.category === filterCategory;
    
    return matchesSearch && matchesCategory && recipe.userId === user?.id;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'difficulty':
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default: // newest
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const categories = [...new Set(recipes.map(recipe => recipe.category))];

  const value = {
    recipes: filteredRecipes,
    allRecipes: recipes,
    loading,
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    sortBy,
    setSortBy,
    categories,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
}