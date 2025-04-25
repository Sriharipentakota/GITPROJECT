import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./products";
import "./shop.css";
import { Footer } from "../../components/Footer/footer";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <p>Tech Shop</p>
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