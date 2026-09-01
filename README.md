# MicroLearn - Peer-to-Peer Micro-Learning Marketplace

A comprehensive React application for a peer-to-peer micro-learning marketplace where users can create profiles, list skills, and book live micro-lessons with expert tutors.

## 🚀 Features

### Core Functionality
- **User Authentication**: OAuth integration (Google, GitHub) with email/password fallback
- **Profile Management**: Multi-step registration and profile customization
- **Skills Marketplace**: Browse, search, and filter skills by category, price, and rating
- **Booking System**: Calendar integration for scheduling micro-lessons
- **Real-time Chat**: Messaging system between students and instructors
- **Dashboard Analytics**: Progress tracking with interactive charts

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Context API with useReducer for global state
- **Form Validation**: React Hook Form with Yup schema validation
- **Routing**: React Router with protected routes
- **Charts & Analytics**: Chart.js and Recharts for data visualization
- **Calendar Integration**: react-calendar for scheduling
- **Real-time Features**: Socket.IO simulation for chat functionality
- **Accessibility**: ARIA labels and keyboard navigation support
- **Testing**: Jest and React Testing Library setup

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **JavaScript** - ES6+ features throughout the application

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Sass** - CSS preprocessor support
- **CSS Modules** - Component-scoped styling
- **Custom Animations** - Smooth transitions and micro-interactions

### State Management
- **Context API** - Global state management
- **useReducer** - Complex state logic handling

### Routing & Navigation
- **React Router v6** - Client-side routing with protected routes

### Forms & Validation
- **React Hook Form** - Performant forms with minimal re-renders
- **Yup** - Schema validation for form inputs

### Data Visualization
- **Chart.js** - Interactive charts for analytics
- **react-chartjs-2** - React wrapper for Chart.js
- **Recharts** - React charting library

### Additional Libraries
- **Axios** - HTTP client for API requests
- **react-calendar** - Calendar component for booking
- **Socket.IO Client** - Real-time communication (simulated)

### Development & Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **Create React App** - Build tooling and development server

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── booking/        # Booking-related components
│   ├── chat/           # Chat and messaging components
│   ├── common/         # Reusable UI components
│   ├── dashboard/      # Dashboard and analytics
│   ├── profile/        # Profile management
│   └── skills/         # Skills marketplace components
├── context/
│   └── AppContext.js   # Global state management
├── hooks/              # Custom React hooks
├── pages/              # Page-level components
├── services/           # API services and utilities
├── tests/              # Test files
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd micro-learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (⚠️ one-way operation)

## 🎯 Demo Credentials

For testing the application, use these demo credentials:

**Email**: `admin@example.com`  
**Password**: `password`

Or use the OAuth simulation buttons for Google and GitHub login.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SOCKET_URL=ws://localhost:3001
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette for primary and secondary colors
- Extended spacing and typography scales
- Custom component classes for buttons, cards, and form inputs

## 📱 Key Pages & Features

### Landing Page
- Hero section with clear value proposition
- Feature highlights and statistics
- How-it-works section
- Call-to-action for registration

### Authentication
- **Login**: Email/password with OAuth options
- **Registration**: Multi-step form with validation
- **Protected Routes**: Automatic redirection for authenticated users

### Skills Marketplace
- **Browse & Search**: Filter by category, price, and rating
- **Skill Details**: Comprehensive skill information with instructor profiles
- **Booking**: Calendar integration for scheduling lessons

### Dashboard
- **Analytics**: Interactive charts showing earnings and progress
- **Recent Activity**: Timeline of user actions
- **Quick Actions**: Easy navigation to key features

### Chat System
- **Real-time Messaging**: Simulated real-time chat with instructors
- **Message History**: Persistent conversation threads
- **Online Status**: User presence indicators

## 🧪 Testing

Run the test suite:

```bash
npm test
```

### Testing Strategy
- **Unit Tests**: Component-level testing with React Testing Library
- **Integration Tests**: Testing component interactions
- **Accessibility Tests**: Ensuring ARIA compliance and keyboard navigation

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#3B82F6, #2563EB, #1D4ED8)
- **Secondary**: Gray tones (#64748B, #475569, #334155)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: System font stack for optimal performance
- **Scale**: Tailwind's default typography scale
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Consistent shadow and border styling
- **Forms**: Unified input styling with validation states

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options
- **Netlify**: Automatic deployment from Git repository
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud storage with CloudFront CDN

## 🔮 Future Enhancements

### Planned Features
- **Payment Integration**: Stripe or PayPal integration
- **Video Calling**: WebRTC for live lessons
- **Mobile App**: React Native version
- **Advanced Analytics**: More detailed progress tracking
- **Skill Assessments**: Pre and post-lesson evaluations
- **Review System**: Student feedback and ratings

### Technical Improvements
- **Progressive Web App**: Offline functionality and push notifications
- **Server-Side Rendering**: Next.js migration for better SEO
- **Real-time Features**: Actual Socket.IO backend integration
- **Database Integration**: PostgreSQL or MongoDB backend
- **API Development**: RESTful API with authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

---

**MicroLearn** - Empowering peer-to-peer learning through technology 🎓✨
