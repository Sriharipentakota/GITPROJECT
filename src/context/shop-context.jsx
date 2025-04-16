import { createContext, useState } from "react";
import { PRODUCTS } from "../product";



export  const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartObj,setCartObj]=useState({})
  console.log("123",cartItems,cartObj,Object.values(cartItems).some(value => value))

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    alert(`Added ${PRODUCTS.find(p => p.id === itemId).productName} to cart!`) 
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log("itemID",itemId)
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

const sumNonZeroValues = (obj) => {
  console.log("obj1234",(Object.values(obj)
  .map(value => value > 0 ? 1 : 0) 
 
  ),obj)
  setCartObj(Object.values(obj)
          .map(value => value > 0 ? 1 : 0) 
          .reduce((acc, value) => acc + value, 0));
};


  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    sumNonZeroValues,
    cartObj
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};