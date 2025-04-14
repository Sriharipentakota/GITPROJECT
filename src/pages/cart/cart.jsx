import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../product";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout ,cartObj} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
console.log("cartObj",cartObj)
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
          <button onClick={() => navigate("/payment")}> Confirm Your Order</button>
        </div>
      ) : (
        <>
        <h1> Your Shopping Cart is Empty</h1>
        <button className="back-btn" onClick={() => navigate("/shop")}>Back to shopping</button>
        </>
      )}
    </div>
  );
};