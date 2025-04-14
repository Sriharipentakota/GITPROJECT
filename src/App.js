import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CartPage from './pages/Cartpage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  </Router>



  //   <Router>
  //   <Route exact path="/" element={<Home/>}/>
  //   <Route exact path="/cart" element={<CartPage/>}/>
  // </Router>



  );
}

export default App;
