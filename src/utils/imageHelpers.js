/**
 * Utility functions for image handling
 */

/**
 * Get a placeholder image URL from Pexels
 * @param {string} query - Search query for the image
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} - Image URL
 */
export function getPlaceholderImage(query = 'food', width = 800, height = 600) {
  const queries = [
    'food-cooking',
    'delicious-meal',
    'restaurant-dish',
    'gourmet-food',
    'homemade-cooking',
    'fresh-ingredients'
  ];
  
  const randomQuery = queries[Math.floor(Math.random() * queries.length)];
  return `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;
}

/**
 * Validate if an image URL is accessible
 * @param {string} url - Image URL to validate
 * @returns {Promise<boolean>} - Whether the image is accessible
 */
export async function validateImageUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
}