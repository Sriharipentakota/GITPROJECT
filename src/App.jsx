import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Cart } from './pages/cart/cart';
import { Contact } from "./pages/contact";
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from "./context/shop-context";
import Login from './pages/loginPage/loginForm';
import Signup from './pages/loginPage/signUpForm';
import PaymentPage from './pages/paymentPage/paymentPage';
import { useEffect, useState } from 'react';
import ProductsInfo from './components/navbar/productsInfo';
import ProtectedRoute from './components/protectedRoute';
import ForgotPasswordForm from './pages/loginPage/forgotPasswordForm';
import ProductPayment from './components/productPayment';
import PaymentOptions from './components/productPaymentOptions';
import OrderConfirmed from './components/orderConfirmed';

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

const AppContent = () => {
  const [isTargetUrl, setIsTargetUrl] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentUrl = location.pathname;
    if (currentUrl.includes("signup") || currentUrl.includes("forgot") || location.pathname === '/') {
      setIsTargetUrl(true);
    } else {
      setIsTargetUrl(false);
    }
  }, [location]);

  return (
    <div className={isTargetUrl ? "myCustomClass App" : "App"}>
      <ShopContextProvider>
        <ConditionalWrapper>
          <Routes>
            <Route path={"/" || "/login"} element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/payment-success' element={<ProductPayment />} />
            <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/products' element={<ProductsInfo />} />
            <Route path='/forgot' element={<ForgotPasswordForm />} />
            <Route path='/payment-options' element={<PaymentOptions />} />
            <Route  path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
        </ConditionalWrapper>
      </ShopContextProvider>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
