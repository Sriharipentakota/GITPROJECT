# Resume Builder Pro - Separate Frontend & Backend Setup Guide

This guide will help you set up the Resume Builder Pro application with separate frontend and backend projects.

## Project Structure

```
resume-builder-frontend/     # React frontend application
├── src/
├── public/
├── package.json
└── .env

resume-builder-backend/      # Node.js backend API
├── routes/
├── models/
├── config/
├── package.json
└── .env
```

## Prerequisites

Before starting, ensure you have the following installed:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Git** (for cloning repositories)
   - Download from: https://git-scm.com/

## Step 1: Database Setup (Supabase)

### 1.1 Create Supabase Account
1. Go to https://supabase.com/
2. Sign up for a free account
3. Create a new project

### 1.2 Get Supabase Credentials
In your Supabase dashboard:
1. Go to Settings → API
2. Copy these values:
   - Project URL
   - Anon/Public Key
   - Service Role Key (keep secret)

### 1.3 Run Database Migrations
1. In Supabase dashboard, go to SQL Editor
2. Run these SQL commands in order:

**First Migration (User Profiles):**
```sql
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON user_profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);
```

**Second Migration (Resumes):**
```sql
CREATE TABLE IF NOT EXISTS resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL DEFAULT 'Untitled Resume',
  content jsonb DEFAULT '{}',
  template text DEFAULT 'modern',
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own resumes"
  ON resumes FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own resumes"
  ON resumes FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own resumes"
  ON resumes FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own resumes"
  ON resumes FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS resumes_user_id_idx ON resumes(user_id);
CREATE INDEX IF NOT EXISTS resumes_created_at_idx ON resumes(created_at DESC);
```

## Step 2: Backend Setup

### 2.1 Navigate to Backend Directory
```bash
cd resume-builder-backend
```

### 2.2 Install Dependencies
```bash
npm install
```

### 2.3 Configure Environment Variables
Create `.env` file in `resume-builder-backend/`:
```env
# Supabase Configuration
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# JWT Secret (Change this in production)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### 2.4 Start Backend Server
```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The backend will run on: http://localhost:5000

## Step 3: Frontend Setup

### 3.1 Navigate to Frontend Directory
```bash
cd resume-builder-frontend
```

### 3.2 Install Dependencies
```bash
npm install
```

### 3.3 Configure Environment Variables
Create `.env` file in `resume-builder-frontend/`:
```env
# Frontend Environment Variables
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3.4 Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on: http://localhost:3000

## Step 4: Access the Application

1. **Frontend:** http://localhost:3000
2. **Backend API:** http://localhost:5000
3. **API Health Check:** http://localhost:5000/health

## Step 5: Test the Setup

1. Open http://localhost:3000 in your browser
2. You should see the Sign In page
3. Click "Create Account" to register a new user
4. After successful registration, you'll be redirected to the dashboard
5. Try creating a new resume to test the full functionality

## Available Scripts

### Frontend (resume-builder-frontend/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend (resume-builder-backend/)
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-restart

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/signin` - Sign in user
- `POST /api/auth/signout` - Sign out user
- `GET /api/auth/profile` - Get user profile

### Resumes
- `GET /api/resume` - Get all user resumes
- `GET /api/resume/:id` - Get specific resume
- `POST /api/resume` - Create new resume
- `PUT /api/resume/:id` - Update resume
- `DELETE /api/resume/:id` - Delete resume

## Troubleshooting

### Common Issues

1. **Backend Connection Error:**
   - Verify Supabase credentials in backend `.env`
   - Check if migrations were run successfully
   - Ensure backend server is running on port 5000

2. **Frontend API Errors:**
   - Verify `VITE_API_BASE_URL` in frontend `.env`
   - Check if backend server is accessible
   - Clear browser cache and localStorage

3. **CORS Issues:**
   - Verify `FRONTEND_URL` in backend `.env`
   - Ensure frontend is running on the correct port

4. **Authentication Issues:**
   - Clear browser localStorage: `localStorage.clear()`
   - Check if JWT_SECRET is set in backend `.env`
   - Verify Supabase Auth is properly configured

### Port Configuration

If you need to change default ports:

**Frontend (port 3000):**
- Update `vite.config.js` server port
- Update `FRONTEND_URL` in backend `.env`

**Backend (port 5000):**
- Update `PORT` in backend `.env`
- Update `VITE_API_BASE_URL` in frontend `.env`

## Production Deployment

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to static hosting (Netlify, Vercel, etc.)
3. Update environment variables for production

### Backend Deployment
1. Deploy to Node.js hosting service (Heroku, Railway, DigitalOcean, etc.)
2. Set production environment variables
3. Update CORS origin to production frontend URL

### Environment Variables for Production
- Change `JWT_SECRET` to a secure random string
- Update `FRONTEND_URL` to production frontend URL
- Set `NODE_ENV=production`

## Features

- ✅ User Authentication (Sign up/Sign in)
- ✅ Resume Builder with ATS optimization
- ✅ Portfolio Website Generation
- ✅ Resume Export (PDF/Word)
- ✅ Multiple Resume Management
- ✅ Responsive Design
- ✅ Secure API with JWT authentication
- ✅ Database persistence with Supabase

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure both frontend and backend servers are running
4. Check the troubleshooting section above

For additional help, please refer to the documentation or create an issue in the project repository.