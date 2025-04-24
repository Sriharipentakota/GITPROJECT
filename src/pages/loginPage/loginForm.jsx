import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import InputField from '../../components/inputFieldComponent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { accountCreated } = location.state || {};
  const { passwordChanged } = location.state || {};
  const isLoggedIn = sessionStorage.getItem('loggedIn');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/shop');
    }
  }, [navigate]);

  const storedUser = JSON.parse(sessionStorage.getItem('users'));
  let matchedUser = storedUser?.find(user => user?.email === email && user?.password === password)
  let matchedUserEmail = storedUser?.find(user => user?.email === email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out both email and password");
      return;
    }
    if (!matchedUserEmail) {
      alert("There is no account created with the provided email.");
      return;
    } else if (!matchedUser) {
      alert("Password is incorrect. Please try again.");
      return;
    }

    if (email && password) {
      sessionStorage.setItem('loggedIn', true);
      alert("Login successful!");
      navigate("/shop");
    }
  };

  const handlePassworChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div> {(passwordChanged) && <p>Password changed successfully! Please log with newly changed Password</p>}</div>
      <div className="login-container">
        <h2 className="text-center mb-4">{(accountCreated || passwordChanged) ? "Welcome Back" : "Welcome"}</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
            placeholder="Enter your email"
            required
            className="form-control"
            label="Email"
          />
          <InputField
            type="password"
            value={password}
            onChange={(e) => handlePassworChange(e)}
            placeholder="Enter your password"
            required
            className="form-control"
            label="Password"
          />
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
        <p className="mt-3 text-center">Forgot your password ? <Link to="/forgot" className="text-decoration-none">Forgot password</Link></p>
      </div>
    </>
  );
}

export default Login;
