import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { ShopContext } from '../../context/shop-context';
import './navbar.css';
import cartImg from '../../assets/shopping-cart.svg';
import { FaUserCircle } from 'react-icons/fa'; // Importing an icon from react-icons
import ModalComponent from '../modal';

export const Navbar = () => {
  const { cartObj, cartItems } = useContext(ShopContext);
  const entryObj = Object.values(cartItems).some(value => value);
  const navigate = useNavigate();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const tooltipRef = useRef(null); // Reference for the tooltip container
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')); // Retrieve logged-in user's data
  const username = loggedInUser?.name || "Guest";

  const handleCloseTooltip = () => setShowTooltip(false);

  // Show the modal when the "Log Out" button is clicked
  const handleLogOutClick = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the modal
  };

  // Perform the actual logout logic when the user confirms
  const handleLogOutConfirm = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loggedInUser'); // Clear username from sessionStorage
    navigate("/", { replace: true }); // Navigate to the home page
    setShowModal(false); // Close the modal
  };

  const handleOrderHistory = () => {
    setShowTooltip(false);
    navigate("/order-history");
  };

  const handleModalClose = () => {
    setShowModal(false); // Close the modal
  };

  // Close the tooltip when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div className='user-icon-container' ref={tooltipRef}>
          <FaUserCircle
            size={32}
            className='user-icon'
            onClick={() => setShowTooltip(!showTooltip)}
          />
          {showTooltip && (
            <div className='tooltip-modal'>
              <p className='tooltip-username'>Hello, {username}</p>
              <button className='tooltip-order-history' onClick={handleOrderHistory}>Order History</button>
              <button className='tooltip-logout' onClick={(e) => handleLogOutClick(e)}>Log Out</button>
              <button className='tooltip-close' onClick={handleCloseTooltip}>Close</button>
            </div>
          )}
        </div>
      </div>

      <ModalComponent
        show={showModal}
        handleClose={handleModalClose} // Close the modal
        onConfirm={handleLogOutConfirm} // Handle logout confirmation
      />
      <Tooltip id="shop-tooltip" />
      <Tooltip id="contact-tooltip" />
      <Tooltip id="cart-tooltip" />
    </>
  );
};