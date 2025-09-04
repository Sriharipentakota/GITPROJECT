import { useAuth } from '../../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import NotificationContainer from '../ui/NotificationContainer';

/**
 * Main layout component
 * Provides consistent layout structure across the app
 */
function Layout({ children }) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        {children}
      </main>
      {user && <Footer />}
      <NotificationContainer />
    </div>
  );
}

export default Layout;