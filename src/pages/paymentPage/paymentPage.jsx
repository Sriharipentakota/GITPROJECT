import React, { useContext, useState } from 'react'
import "./paymentPage.css"
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../product';
import InputField from '../../components/inputFieldComponent';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const { cartItems} = useContext(ShopContext);

  const [textArea, setTextArea] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const navigate = useNavigate();


  const filteredProducts = PRODUCTS.filter(product => cartItems[product.id] !== 0);
  const filteredProductsLength = filteredProducts?.length;
  console.log(filteredProductsLength, "length");
  const randomNumber = (Math.floor(Math.random() * 1000000) + 1)
  console.log(textArea, paymentDate, randomNumber, "textArea")
  function handleSubmit(e) {

    e.preventDefault();
    navigate("/payment-success", { state: { textArea, paymentDate, randomNumber } });
  }
  return (
    <>
      <div className="payment-div">
        <h1>Place your order</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='order-main-div'>
          <div className='order-div'>
            <div>Order ID :- <b>{randomNumber}</b> </div>
            <div>selected Products :-{filteredProducts.map(e => e.name).join(', ')}</div>
            <div>Quantity :-  {filteredProductsLength}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>Delivery Date :- <InputField type="date" onChange={(e) => setPaymentDate(e.target.value)} /> </div>
            <div style={{ display: "flex" }}>Shipping Address :- <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setTextArea(e.target.value)}></textarea> </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit Order</button>
        </div >
      </form>
    </>
  )
}

export default PaymentPage;
