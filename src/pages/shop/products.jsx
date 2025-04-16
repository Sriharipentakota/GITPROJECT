import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, sumNonZeroValues} = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  sumNonZeroValues(cartItems)


  return (
    <div className="product">
      <img src={productImage}  alt="nothing-specified"/>
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