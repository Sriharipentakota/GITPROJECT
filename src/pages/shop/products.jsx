import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems,sumNonZeroValues,cartObj } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemCount = cartItems[id];
  sumNonZeroValues(cartItems)

  const goToCart = () => {
    navigate('/cart');
  };
  const handleClick = (id) => {
    addToCart(id)
    toast.success('Button clicked successfully!');
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
   
    </div>
  );
};