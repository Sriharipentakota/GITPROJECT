import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Contact } from "./pages/contact";
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from "./context/shop-context";
import Login from './pages/loginPage/loginForm';
import Signup from './pages/loginPage/signUpForm';
import SocialLogin from './pages/loginPage/socialLoginForm';
import PaymentPage from './pages/paymentPage/paymentPage';

const ConditionalWrapper = ({ children }) => {
  const location = useLocation();
  
  // Check if the current route is either '/' (login) or '/signup'
  const shouldShowNavbar = !(location.pathname === '/' || location.pathname.includes('/signup'));

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ConditionalWrapper>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/googleForm' element={<SocialLogin />} />
              <Route path='/shop' element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/payment' element={<PaymentPage />} />
            </Routes>
          </ConditionalWrapper>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
