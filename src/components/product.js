import React from 'react';
import './product.css';

function Product({ product }) {
  const handleAddToCart = () => {
    // Implement the logic to add the product to the cart
    console.log(alert(`Added ${product.name} to the cart`));
  };

  return (
    <div className='PRODUCT'>
      <h3>{product.name}</h3>
      <p>{product.username}</p>
      <p>Number:{product.phone}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
