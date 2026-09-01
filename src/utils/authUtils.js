/**
 * Authentication Utilities
 * Handles secure password hashing and credential validation.
 *
 * Security note: credentials are validated client-side with SHA-256 and the
 * session token is stored in localStorage. This is demo-grade protection
 * suitable for a single-device personal app — not production auth.
 */

const CREDENTIALS = {
  username: 'admin',
  // Password: 'Srihari@6281' stored as SHA-256 hash
  passwordHash: '46407a7afd1d6d5567a2a17e2c17c0f1608fbbace6d63ffd4852b3d913054a99'
};

export async function hashString(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function constantTimeCompare(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function validateCredentials(username, password) {
  await new Promise(resolve => setTimeout(resolve, 300));
  const usernameMatch = constantTimeCompare(username, CREDENTIALS.username);
  const passwordHash = await hashString(password);
  const passwordMatch = constantTimeCompare(passwordHash, CREDENTIALS.passwordHash);
  return usernameMatch && passwordMatch;
}

export function generateSessionToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

export const SESSION_STORAGE_KEY = 'qr_auth_session';

/**
 * Use localStorage (not sessionStorage) so the session survives Android
 * killing the WebView process in the background. Logout still clears it.
 */
export function storeSession(token) {
  localStorage.setItem(SESSION_STORAGE_KEY, token);
}

export function getSession() {
  return localStorage.getItem(SESSION_STORAGE_KEY);
}

export function clearSession() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

export function isAuthenticated() {
  return !!getSession();
}
