import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }

    // Read existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Add the new user to the array
    if (password === confirmPassword) {
      users.push({ name, email, password, confirmPassword });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Account created successfully!");
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/', { state: { accountCreated: true } });
    } else {
      alert("Passwords not matching");
    }
  };



  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
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
