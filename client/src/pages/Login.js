import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <div className="left">
      <h1 className="header" >HealthBubble</h1>
      <div className="tag">
        <img className="social" src="social.png" alt="" />
      </div>
      <h3>Connect with your health-focussed buds,</h3>
      <h3>create a social Bubble</h3>
      </div>
      <div className="right">
      <div className="tag">
        <img className="logo" src="logo.png" alt=""/>
        <h2>HealthBubble</h2>
      </div>
        <h4>Log in to your account</h4>
        {/* <h5>Welcome back</h5> */}
        Email Address
        <input/>
        Password
        <input/>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
