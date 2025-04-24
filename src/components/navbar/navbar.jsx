import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './navbar.css';
import cartImg from '../../assets/shopping-cart.svg';
import logOut from '../../assets/logout-svgrepo-com.svg';
import { ShopContext } from '../../context/shop-context';
import ModalComponent from '../modal';

export const Navbar = () => {
  const { cartObj, cartItems } = useContext(ShopContext);
  const entryObj = Object.values(cartItems).some(value => value);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(false);
  const handleClose = () => {
    navigate("/", { replace: true });
  }

  const handleLogOut = (e) => {
    sessionStorage.removeItem('loggedIn');
    e.preventDefault();
    setShow(true);
  }

  return (
    <>
      <div className='navbar'>
        <div className='links'>
          <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''} data-tooltip-id="shop-tooltip" data-tooltip-content="Shop">Shop</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} data-tooltip-id="contact-tooltip" data-tooltip-content="Contact Us">Contact</Link>
          <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''} data-tooltip-id="cart-tooltip" data-tooltip-content="View Cart">
            <div className='cartDiv'>
              <img src={cartImg} alt='Shopping Cart' />
              {cartObj && entryObj > 0 ?
                <span className='cartImage'>{cartObj}</span>
                : null}
            </div>
          </Link>
        </div>
        <div>
          <Link to="/" onClick={handleLogOut} data-tooltip-id="logout-tooltip" data-tooltip-content="Log Out">
            <img src={logOut} alt='Log Out' className='log-out' />
          </Link>
          <ModalComponent show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        </div>
      </div>
      <Tooltip id="shop-tooltip" />
      <Tooltip id="contact-tooltip" />
      <Tooltip id="cart-tooltip" />
      <Tooltip id="logout-tooltip" />
    </>
  );
}
