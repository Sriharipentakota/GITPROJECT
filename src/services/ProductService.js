// This file simulates fetching product data from a server or API

const productService = {
    getProducts: async () => {
      // Simulate fetching products from a server
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    },
  };
  
  export default productService;
  