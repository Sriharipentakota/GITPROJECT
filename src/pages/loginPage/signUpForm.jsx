import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import InputField from '../../components/inputFieldComponent';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  let users = JSON.parse(sessionStorage.getItem('users') || '[]');
  const emailExists = users?.some(user => user?.email === email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }

    if (emailExists) {
      alert("Email already exists");
      clearForm();
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create new user and store in session
    users.push({ name, email, password, confirmPassword });
    sessionStorage.setItem('users', JSON.stringify(users));
    alert("Account created successfully!");
    navigate('/', { state: { accountCreated: true } });
  };

  // Utility function to clear form fields
  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };



  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="form-control"
          label="Name"
        />
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          placeholder="Enter your email"
          required
          className="form-control"
          label="Email"
        />
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your new password"
          required
          className="form-control"
          label="Password"
        />

        <InputField
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
          className="form-control"
          label="Password"
        />
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">Already have an account? <Link to="/" className="text-decoration-none">Login</Link></p>
    </div>
  );
};

export default Signup;
