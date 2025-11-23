# QR Code Generator - Authentication System

## Overview

This QR Code Generator application now features a secure, frontend-only authentication system that protects access to the QR code generation functionality.

## Security Features

### 1. **Password Hashing (SHA-256)**
- Passwords are never stored in plain text
- SHA-256 hashing algorithm is used for secure password comparison
- Password hash is computed in-memory during login validation

### 2. **Constant-Time Comparison**
- Prevents timing attacks by using constant-time string comparison
- Both username and password are validated securely

### 3. **Rate Limiting & Brute Force Protection**
- Maximum of 5 failed login attempts
- Account lockout for 5 minutes after exceeding attempts
- Failed attempts reset after 1 minute of inactivity
- Lockout state persists in localStorage across page refreshes

### 4. **Session Management**
- Session tokens generated using cryptographically secure random values
- Sessions stored in sessionStorage (cleared when browser tab closes)
- Automatic session validation on page load
- Secure logout functionality

### 5. **User Feedback**
- Clear error messages for invalid credentials
- Remaining attempt counter
- Lockout countdown timer
- Loading states during authentication

## Default Credentials

```
Username: admin
Password: QRAdmin2024!
```

**Important:** In a production environment, you should change the password hash in `src/utils/authUtils.js`

## How to Change the Password

1. Generate a new SHA-256 hash for your desired password:

```javascript
// Run this in browser console
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log('Password hash:', hashHex);
}

hashPassword('YourNewPassword');
```

2. Update the `CREDENTIALS` object in `src/utils/authUtils.js`:

```javascript
const CREDENTIALS = {
  username: 'admin', // Change username if needed
  passwordHash: 'YOUR_NEW_HASH_HERE'
};
```

## File Structure

```
src/
├── components/
│   ├── Login/
│   │   ├── index.jsx          # Login component with rate limiting
│   │   └── Login.css          # Login page styling
│   └── ProtectedRoute.jsx     # Route guard component
├── context/
│   └── AuthContext.jsx        # Authentication state management
└── utils/
    └── authUtils.js           # Security utilities (hashing, validation)
```

## How It Works

### 1. Login Flow
```
User enters credentials
    ↓
SHA-256 hash computed for password
    ↓
Constant-time comparison with stored hash
    ↓
If valid: Generate session token → Store in sessionStorage
    ↓
If invalid: Increment failed attempts → Show error
    ↓
After 5 failures: Lock account for 5 minutes
```

### 2. Session Protection
```
User navigates to protected route
    ↓
ProtectedRoute checks sessionStorage
    ↓
Valid session: Render protected content
    ↓
No session: Redirect to /login
```

### 3. Logout Flow
```
User clicks logout
    ↓
Clear sessionStorage
    ↓
Update auth state
    ↓
Redirect to /login
```

## Security Considerations

### ✅ Implemented
- Password hashing (SHA-256)
- Constant-time comparison (prevents timing attacks)
- Rate limiting (prevents brute force)
- Account lockout mechanism
- Secure session tokens (crypto.getRandomValues)
- Session storage (cleared on tab close)
- Input sanitization
- Artificial delay on login attempts (300ms)

### ⚠️ Limitations (Frontend-Only Auth)
- No server-side validation
- Password hash visible in source code
- Can be bypassed by modifying JavaScript in browser DevTools
- No audit logging
- Session not validated server-side

### 🔒 Recommendations for Production
If you need enterprise-grade security:
1. Implement backend authentication (Node.js, Django, etc.)
2. Use JWT tokens with server-side validation
3. Store passwords with bcrypt or Argon2
4. Implement HTTPS
5. Add CSRF protection
6. Use secure HTTP-only cookies
7. Implement 2FA/MFA
8. Add rate limiting at server/CDN level
9. Monitor and log authentication attempts
10. Regular security audits

## Usage

### Development
```bash
npm start
```

Navigate to `http://localhost:3000` - you'll be redirected to `/login`

### Login
1. Enter username: `admin`
2. Enter password: `QRAdmin2024!`
3. Click "Login"

### Logout
Click the "🚪 Logout" button in the navigation bar

## API Reference

### Authentication Utilities (`authUtils.js`)

#### `hashString(text)`
Hashes a string using SHA-256
- **Parameters:** `text` (string)
- **Returns:** Promise<string> - Hexadecimal hash

#### `validateCredentials(username, password)`
Validates user credentials securely
- **Parameters:** `username` (string), `password` (string)
- **Returns:** Promise<boolean>

#### `isAuthenticated()`
Checks if user has valid session
- **Returns:** boolean

#### `storeSession(token)`, `getSession()`, `clearSession()`
Session management functions

### Authentication Context

#### `useAuth()`
Hook to access authentication state and methods
```javascript
const { isAuthenticated, isLoading, login, logout } = useAuth();
```

## Testing

### Test Scenarios

1. **Valid Login**
   - Use correct credentials
   - Should redirect to QR generator

2. **Invalid Credentials**
   - Use wrong username/password
   - Should show error message

3. **Rate Limiting**
   - Try 5 failed logins
   - Should lock account for 5 minutes

4. **Session Persistence**
   - Login successfully
   - Refresh page
   - Should remain logged in

5. **Session Termination**
   - Login successfully
   - Close browser tab
   - Reopen - should require login

6. **Logout**
   - Click logout button
   - Should redirect to login page

## Troubleshooting

### Issue: Can't login even with correct credentials
- Clear browser localStorage and sessionStorage
- Hard refresh the page (Ctrl+F5)

### Issue: Account locked
- Wait 5 minutes or clear localStorage item `login_lockout`

### Issue: Session not persisting
- Check if sessionStorage is enabled in browser
- Ensure you're not in private/incognito mode (some browsers clear sessionStorage differently)

## License

This authentication system is part of the QR Code Generator application.
