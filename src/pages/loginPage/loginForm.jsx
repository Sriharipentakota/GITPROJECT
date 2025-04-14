import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
      emailError: '',
      passwordError: ''
    });
    const storedUser = JSON.parse(localStorage.getItem('users'));
    console.log("object2",storedUser?.find(user => user.email === email && user.password === password))
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        setErrors({
          emailError: '',
          passwordError: ''
        });
      
        // Check if email and password are filled
        if (!email || !password) {
          alert("Please fill out both email and password");
          return;
        }
      
        // Retrieve stored user data
        const storedUser = JSON.parse(localStorage.getItem('users'));
       let matchedUser= storedUser?.find(user => user.email === email && user.password === password)
        console.log("object",storedUser,matchedUser)
      
        if (!matchedUser) {
          alert("No user found in localStorage");
          return;
        }
      
        // Compare entered credentials with stored data
        if (email !== matchedUser.email) {
          setErrors(prevErrors => ({
            ...prevErrors,
            emailError: "Email does not match"
          }));
        }
      
        if (password !== matchedUser.password) {
          setErrors(prevErrors => ({
            ...prevErrors,
            passwordError: "Password does not match"
          }));
        }
      
        // Login successful
        if(email && password){
        console.log('Login successful');
        alert("Login successful!");
        navigate("/shop");
        }
      };
      
    return (
      <div className="login-container">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 email-field">
            <div>
            <label htmlFor="email" className="form-label">Email</label>
            </div>
            <div>
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
            />
            </div>
           <div> {errors.emailError && <small className="text-danger">{errors.emailError}</small>}</div>
          </div>
          <div className="mb-3 password-field">
            <div>
            <label htmlFor="password" className="form-label">Password</label>
            </div>
            <div>
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
            </div>
           <div>{errors.passwordError && <small className="text-danger">{errors.passwordError}</small>}</div> 
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
      </div>
    );
}

export default Login;
