/**
 * Utility functions for recipe operations
 */

/**
 * Format cooking time for display
 * @param {number} minutes - Cooking time in minutes
 * @returns {string} - Formatted time string
 */
export function formatCookTime(minutes) {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Calculate recipe difficulty score based on ingredients and steps
 * @param {Array} ingredients - Recipe ingredients
 * @param {Array} steps - Recipe steps
 * @returns {string} - Difficulty level
 */
export function calculateDifficulty(ingredients, steps) {
  const score = ingredients.length + steps.length * 1.5;
  
  if (score <= 10) return 'Easy';
  if (score <= 20) return 'Medium';
  return 'Hard';
}

/**
 * Generate recipe excerpt for preview
 * @param {string} description - Full description
 * @param {number} maxLength - Maximum character length
 * @returns {string} - Truncated description
 */
export function getRecipeExcerpt(description, maxLength = 120) {
  if (description.length <= maxLength) {
    return description;
  }
  
  return description.substring(0, maxLength).trim() + '...';
}

/**
 * Sort recipes by various criteria
 * @param {Array} recipes - Array of recipe objects
 * @param {string} sortBy - Sort criteria
 * @returns {Array} - Sorted recipes
 */
export function sortRecipes(recipes, sortBy) {
  const sorted = [...recipes];
  
  switch (sortBy) {
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'difficulty':
      const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
      return sorted.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    case 'cookTime':
      return sorted.sort((a, b) => a.cookTime - b.cookTime);
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    default: // newest
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
}