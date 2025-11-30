/**
 * Authentication Utilities
 * Handles secure password hashing and credential validation
 */

// Predefined credentials (username in plain text, password as SHA-256 hash)
const CREDENTIALS = {
  username: 'admin',
  // Password: 'Srihari@6281' - stored as SHA-256 hash
  passwordHash: '46407a7afd1d6d5567a2a17e2c17c0f1608fbbace6d63ffd4852b3d913054a99'
};

/**
 * Hash a string using SHA-256
 * @param {string} text - Text to hash
 * @returns {Promise<string>} Hexadecimal hash string
 */
export async function hashString(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Securely compare two strings in constant time to prevent timing attacks
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {boolean} True if strings match
 */
function constantTimeCompare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

/**
 * Validate user credentials
 * @param {string} username - Provided username
 * @param {string} password - Provided password (plain text)
 * @returns {Promise<boolean>} True if credentials are valid
 */
export async function validateCredentials(username, password) {
  // Add artificial delay to prevent timing attacks
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Check username (case-sensitive)
  const usernameMatch = constantTimeCompare(username, CREDENTIALS.username);
  
  // Hash the provided password
  const passwordHash = await hashString(password);
  
  // Check password hash
  const passwordMatch = constantTimeCompare(passwordHash, CREDENTIALS.passwordHash);
  
  return usernameMatch && passwordMatch;
}

/**
 * Generate a session token
 * @returns {string} Random session token
 */
export function generateSessionToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Session storage key
 */
export const SESSION_STORAGE_KEY = 'qr_auth_session';

/**
 * Store session in sessionStorage
 * @param {string} token - Session token
 */
export function storeSession(token) {
  sessionStorage.setItem(SESSION_STORAGE_KEY, token);
}

/**
 * Get current session token
 * @returns {string|null} Session token or null
 */
export function getSession() {
  return sessionStorage.getItem(SESSION_STORAGE_KEY);
}

/**
 * Clear session
 */
export function clearSession() {
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
export function isAuthenticated() {
  return !!getSession();
}
