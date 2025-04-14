import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import cartImg from '../assets/shopping-cart.svg'
import logOut from '../assets/logout-svgrepo-com.svg'
import { ShopContext } from '../context/shop-context';


export const Navbar = () => {
  const {cartObj,cartItems} = useContext(ShopContext);
  const entryObj=Object.values(cartItems).some(value => value)
  console.log("object123",Object.values(cartItems).some(value => value),cartObj)
  return (
    <>
    <div className='navbar'>
<div className='links'>
<Link to="/shop">Shop</Link>
<Link to="/contact"> Contact </Link>
<Link to="/cart">
<div className='cartDiv'>
            <img src={cartImg} alt='Shopping Cart' />
            {cartObj && entryObj > 0 ? 
              <span className='cartImage'>{cartObj}</span> 
              : null}
          </div>
    </Link>
</div>
    <div>
    <Link to="/">  <img src={logOut} alt='Shopping Cart' className='log-out' /> </Link>
    </div>
    </div>
    </>
  )
}
