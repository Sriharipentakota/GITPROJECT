import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/products", {
      state: {
        id,
        productName,
        price,
        productImage,
      },
    });
  };

  return (
    <div className="product">
      <span onClick={(a) => handleProducts(a)}>
        <img src={productImage} alt="nothing-specified" />
        <div className="description" >
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
      </span>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

    </div>
  );
};