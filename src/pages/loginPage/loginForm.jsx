import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import InputField from '../../components/inputFieldComponent';
import { ThreeDots } from 'react-loader-spinner'; // Import the loading indicator component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading animation
  const navigate = useNavigate();
  const location = useLocation();
  const { accountCreated } = location.state || {};
  const { passwordChanged } = location.state || {};

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    if (isLoggedIn) {
      navigate('/shop');
    }
  }, [navigate]);

  const storedUser = JSON.parse(sessionStorage.getItem('users'));
  let matchedUser = storedUser?.find(user => user?.email === email && user?.password === password);
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
      setLoading(true); // Show loading animation
      sessionStorage.setItem('loggedIn', true);
      sessionStorage.setItem('loggedInUser', JSON.stringify({ name: matchedUser.name, email }));
      alert("Login successful!");
      setTimeout(() => {
        navigate("/shop");
        setLoading(false); // Hide loading animation
      }, 2000); // Simulate a delay for loading animation
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <> {loading ? (
      <div className="loading-container">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#545a69"
          ariaLabel="three-dots-loading"
          wrapperClassName="landing-loader"
          visible={true}
          variant="bounce"
        />
      </div>
    ) : (
      <div>
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
              onChange={(e) => handlePasswordChange(e)}
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
      </div>
    )}
    </>
  );
}

export default Login;
