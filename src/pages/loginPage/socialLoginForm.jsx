import React from 'react';
import "./styles.css";
import { useLocation } from 'react-router-dom';

const SocialLogin = () => {
  const location = useLocation();
  const { textArea, paymentDate, randomNumber } = location.state || {};
console.log(textArea, paymentDate, randomNumber , "payment page");
  return (
    <div className="social-login">
      <h2 className="text-center mb-4">Or sign in with:</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button className="btn btn-facebook me-2"><i className="fab fa-facebook-f"></i> Sign in with Facebook</button>
        <button className="btn btn-google"><i className="fab fa-google"></i> Sign in with Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;
