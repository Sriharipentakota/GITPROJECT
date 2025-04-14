import React, { useState, useEffect } from 'react';
import ProductList from '../components/productlist';
import productService from '../services/ProductService';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from a backend server or API
    productService.getProducts('https://jsonplaceholder.typicode.com/users')
    .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the E-Commerce Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
