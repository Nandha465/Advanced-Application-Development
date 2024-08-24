import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { setRole, setToken, setusername } from './LocalStorage';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (username.length === 0) {
      errors.username = 'Username is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (username === "nandha" && password === "nandha123") {
      // Redirect to admin page if username and password are correct
      navigate("/admin");
      return;
    }
    else{
      navigate("/home");
    }

    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }

    // setFormErrors({
    //   username: '',
    //   password: '',
    // });

    // const userCredentials = {
    //   username: username,
    //   password: password
    // };

    // axios.post("http://localhost:8080/auth/login", userCredentials)
    //   .then(response => {
    //     const token = response.data.token;
    //     if (token) {
    //       setToken(token)
    //       setusername(userCredentials.username);
    //       const userType = response.data.role;
    //       setRole(userType)
    //       if (userType === "USER") {
    //         navigate("/home");zz
    //       } else {
    //         alert("Invalid user role");
    //       }
    //     } else {
    //       alert("Invalid token. Please try again.");
    //     }
    //   }).catch(error => {
    //     alert(error.response.data)
    //   });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormErrors({ ...formErrors, username: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
        <div className="signin-signup" >
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
              <input className='LoginInput' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
            </div>
            {formErrors.username && <p className="error">{formErrors.username}</p>}
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
              <input className='LoginInput' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
            </div>
            {formErrors.password && <p className="error">{formErrors.password}</p>}
            <button className='btn' onClick={validate} type="submit">Sign In</button>
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto' />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleNavigate}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
