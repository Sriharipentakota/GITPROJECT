import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/navbar/navbar';
import { Cart } from './pages/cart/cart';
import { Contact } from "./pages/contact";
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from "./context/shop-context";
import Login from './pages/loginPage/loginForm';
import Signup from './pages/loginPage/signUpForm';
import SocialLogin from './pages/loginPage/socialLoginForm';
import PaymentPage from './pages/paymentPage/paymentPage';
import { useEffect, useState } from 'react';
import ProductsInfo from './components/navbar/productsInfo';
import ProtectedRoute from './components/protectedRoute';
import ForgotPasswordForm from './pages/loginPage/forgotPasswordForm';

const ConditionalWrapper = ({ children }) => {
  const location = useLocation();

  // Check if the current route is either '/' (login) or '/signup'
  const shouldShowNavbar = !(location.pathname === '/' || location.pathname.includes('/signup') || location.pathname.includes('/forgot'));

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  const [isTargetUrl, setIsTargetUrl] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("signup")) {
      setIsTargetUrl(true);
    }
  }, []);
  return (
    <div className={isTargetUrl ? "myCustomClass App" : " App"}>
      <ShopContextProvider>
        <Router>
          <ConditionalWrapper>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/googleForm' element={<SocialLogin />} />
              <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/products' element={<ProductsInfo />} />
              <Route path='/forgot' element={<ForgotPasswordForm />} />
            </Routes>
          </ConditionalWrapper>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
