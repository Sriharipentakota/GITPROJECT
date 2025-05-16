import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shop-context"; // Adjust the path as needed

const CartWarningProvider = ({ children }) => {
  const { cartItems } = useContext(ShopContext);

  useEffect(() => {
    const handler = (e) => {
      if (Object.values(cartItems).some(v => v > 0)) {
        e.preventDefault();
        e.returnValue = "Your cart will be removed if you refresh or leave this page.";
        return e.returnValue;
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [cartItems]);

  return children;
};

export default CartWarningProvider;