import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./products";
import "./shop.css";
import { Footer } from "../../components/Footer/footer";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};