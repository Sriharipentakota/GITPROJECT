// Code Generated by Sidekick is for learning and experimentation purposes only. 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });
  const location = useLocation();
  const { accountCreated } = location.state || {};

  const storedUser = JSON.parse(localStorage.getItem('users'));
  console.log("object2", storedUser?.find(user => user?.email === email && user?.password === password))

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      emailError: '',
      passwordError: ''
    });

    if (!email || !password) {
      alert("Please fill out both email and password");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('users'));
    let matchedUser = storedUser?.find(user => user?.email === email && user?.password === password)
    let matchedUserEmail = storedUser?.find(user => user?.email === email);
    console.log(matchedUserEmail, "matchedUserEmail")

    if (!matchedUserEmail) {
      alert("There is no account created with the provided email.");
      return;
    } else if (!matchedUser) {
      alert("Password is incorrect. Please try again.");
      return;
    }

    if (email !== matchedUser?.email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        emailError: "Email does not match"
      }));
    }

    if (password !== matchedUser?.password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwordError: "Password does not match"
      }));
    }

    if (email && password) {
      console.log('Login successful');
      alert("Login successful!");
      navigate("/shop");
    }
  };

  return (
    <>
      <div> {accountCreated && <p>Account created successfully! Please log with newly created Credentials</p>}</div>
      <div className="login-container">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 email-field">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  emailError: ''
                }));
              }}
              placeholder="Enter your email"
              required
              className={`form-control ${errors.emailError ? 'is-invalid' : ''}`}
              label="Email"
            />
            {errors.emailError && <small className="text-danger">{errors.emailError}</small>}
          </div>
          <div className="mb-3 password-field">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  passwordError: ''
                }));
              }}
              placeholder="Enter your password"
              required
              className={`form-control ${errors.passwordError ? 'is-invalid' : ''}`}
            />
            {errors.passwordError && <small className="text-danger">{errors.passwordError}</small>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
      </div>
    </>
  );
}

export default Login;
