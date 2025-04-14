import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Check if all fields are filled
  if (!name || !email || !password) {
    alert("Please fill out all fields");
    return;
  }

  // Read existing users from localStorage
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  // Add the new user to the array
  users.push({ name, email, password });

  // Store the updated array of users in localStorage
  localStorage.setItem('users', JSON.stringify(users));

  console.log('Signup successful:', name, email, password);

  // Redirect to login page or show success message
  alert("Account created successfully!");
};



  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">Already have an account? <Link to="/" className="text-decoration-none">Login</Link></p>
    </div>
  );
};

export default Signup;
