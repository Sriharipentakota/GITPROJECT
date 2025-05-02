import React, { useContext, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { ShopContext } from '../../context/shop-context';
import './navbar.css';
import cartImg from '../../assets/shopping-cart.svg';
import { FaUserCircle } from 'react-icons/fa'; // Importing an icon from react-icons

export const Navbar = () => {
  const { cartObj, cartItems } = useContext(ShopContext);
  const entryObj = Object.values(cartItems).some(value => value);
  const navigate = useNavigate();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility
  const tooltipRef = useRef(null); // Reference for the tooltip container
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')); // Retrieve logged-in user's data
  const username = loggedInUser?.name || "Guest";

  const handleCloseTooltip = () => setShowTooltip(false);

  const handleLogOut = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loggedInUser'); // Clear username from sessionStorage
    navigate("/", { replace: true });
  };

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
        <div
          className='user-icon-container'
          tabIndex={0} // Makes the div focusable
          ref={tooltipRef}
          onBlur={() => setShowTooltip(false)} // Close tooltip on blur
        >
          {/* User icon to open the tooltip */}
          <FaUserCircle
            size={32}
            className='user-icon'
            onClick={() => setShowTooltip(!showTooltip)}
          />
          {showTooltip && (
            <div className='tooltip-modal'>
              <p className='tooltip-username'>Hello, {username}</p>
              <button className='tooltip-logout' onClick={handleLogOut}>Log Out</button>
              <button className='tooltip-close' onClick={handleCloseTooltip}>Close</button>
            </div>
          )}
        </div>
      </div>
      <Tooltip id="shop-tooltip" />
      <Tooltip id="contact-tooltip" />
      <Tooltip id="cart-tooltip" />
    </>
  );
};