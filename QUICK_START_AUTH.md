# Quick Start Guide - Secure Login System

## 🚀 Getting Started

Your QR Code Generator now has a secure login system! Here's everything you need to know.

## 📝 Login Credentials

```
Username: admin
Password: QRAdmin2024!
```

## 🔐 Security Features

✅ **Password Hashing** - Passwords are hashed using SHA-256  
✅ **Rate Limiting** - Maximum 5 failed attempts  
✅ **Account Lockout** - 5-minute lockout after failed attempts  
✅ **Session Security** - Sessions cleared when browser closes  
✅ **Brute Force Protection** - Artificial delays and attempt tracking  

## 📖 How to Use

### First Time Setup
1. Start your application: `npm start`
2. Browser will open to `http://localhost:3000`
3. You'll be automatically redirected to the login page

### Logging In
1. Enter username: **admin**
2. Enter password: **QRAdmin2024!**
3. Click "Login"
4. You'll be redirected to the QR Code Generator

### Using the App
- Generate QR codes as normal
- Your session persists during the browser session
- Click "🚪 Logout" in the navigation to logout

### Security Notes
⚠️ **5 Failed Attempts = 5-minute lockout**
- Remaining attempts are displayed after each failed login
- Lockout timer is shown when account is locked
- Lockout persists even if you refresh the page

## 🔧 Customization

### Change the Password

1. Open browser console (F12)
2. Run this code with your new password:

```javascript
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log('New password hash:', hashHex);
  console.log('Copy this hash to authUtils.js');
}

// Replace 'YourNewPassword' with your desired password
hashPassword('YourNewPassword');
```

3. Copy the generated hash
4. Open `src/utils/authUtils.js`
5. Replace the `passwordHash` value:

```javascript
const CREDENTIALS = {
  username: 'admin',
  passwordHash: 'PASTE_YOUR_NEW_HASH_HERE'
};
```

6. Save and restart the app

### Change the Username

Simply edit the `username` field in `src/utils/authUtils.js`:

```javascript
const CREDENTIALS = {
  username: 'your-new-username', // Change this
  passwordHash: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
};
```

## 🛠️ Troubleshooting

### Can't Login?
- Double-check username (case-sensitive)
- Make sure you're using the correct password
- Clear browser cache and try again

### Account Locked?
- Wait 5 minutes
- Or open DevTools Console (F12) and run:
  ```javascript
  localStorage.removeItem('login_lockout');
  location.reload();
  ```

### Lost Session?
- Sessions are stored in sessionStorage
- They expire when you close the browser tab
- This is a security feature!

## 📁 New Files Created

```
src/
├── components/
│   ├── Login/
│   │   ├── index.jsx       # Login component
│   │   └── Login.css       # Login styles
│   └── ProtectedRoute.jsx  # Route protection
├── context/
│   └── AuthContext.jsx     # Auth state management
└── utils/
    └── authUtils.js        # Security utilities

AUTHENTICATION.md              # Detailed documentation
QUICK_START_AUTH.md           # This file
```

## 🔄 Integration Details

The authentication system is fully integrated:

- ✅ App.jsx wrapped with AuthProvider
- ✅ QR Generator protected with ProtectedRoute
- ✅ Navigation includes logout button
- ✅ Login page with rate limiting
- ✅ Session management with sessionStorage

## 🎯 Usage Flow

```
Start App → Login Page → Enter Credentials → 
  ↓ (Valid)                    ↓ (Invalid)
Generate QR Codes          Error + Attempt Counter
  ↓                            ↓ (5 failures)
Use App Normally           Account Locked (5 min)
  ↓
Logout → Login Page
```

## 💡 Tips

1. **Session Duration**: Sessions last until you close the browser tab
2. **Multiple Tabs**: Each tab maintains its own session
3. **Private Browsing**: Works in incognito mode
4. **Password Visibility**: Click the eye icon (👁️) to toggle password visibility
5. **Auto-Complete**: The login form supports browser auto-complete

## 🚨 Important Notes

- This is **frontend-only** authentication
- Suitable for demos, prototypes, and low-security needs
- For production apps with sensitive data, implement **backend authentication**
- The password hash is visible in source code (client-side limitation)

## 📞 Need Help?

Check the detailed documentation in `AUTHENTICATION.md` for:
- Complete security analysis
- Architecture details
- API reference
- Advanced configuration
- Production recommendations

---

**Ready to start?** Run `npm start` and login with **admin / QRAdmin2024!**
