import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    handleLogin(username, password); // Pass username and password to handleLogin function from props
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://i.ibb.co/HhLjVhk/IM-AI-CART.png"
          alt="Company Logo"
          className="login-logo"
        />
        <label className="login-label">IM.AI CART</label>
      </div>
      <div className="login-right">
        <h2>Login in to your account</h2>
        <h5>Welcome back! Please enter your details.</h5>
        <form onSubmit={handleFormSubmit}>
          <div className='formContents'>
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='formContents'>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='formContents' style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{ display:'flex',alignItems:'center',justifyContent:'start'}}>
            <input className='checkbox' type="checkbox" id="remember" />
            <label className='fontS' htmlFor="remember">Remember for 30 days</label>
            </div>
            <div>
            <a className='fontS' href="/forgotpassword">Forgot password</a>
          </div>
           
          </div>
          
          <button className='Sign' type="submit">Sign in</button>
          <button className='Google' type="button">Sign in with Google</button>
          <div className='formContents' style={{display:'flex', justifyContent:'center'}}>
            <span className='fontS'>Don't have an account? </span>
            <a className='fontS'  href="/signup">Sign up</a>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
