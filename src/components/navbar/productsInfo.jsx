import React from 'react';
import { useLocation } from "react-router-dom";

const ProductsInfo = () => {
    const location = useLocation();
    const { id, productName, price, productImage } = location.state || {};
    console.log(id, productName, "heknsdlm");
    return (
        <div >
            <div >
                <img src={productImage} alt="nothing-specified" style={{ width: "500px" }} />
            </div>
            <div className="description" >
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
        </div>
    );
};

export default ProductsInfo;
