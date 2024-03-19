import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
// import {dogimg} from '../assets/dog.jpg';
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if(formData.username==="nandha"&& formData.password==="nandha123"){
      navigate("/admin")
    }
    else{
      navigate("/");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can submit the form data to your server or perform other actions here.
      setIsSubmitted(true);
    }
  };
const handleNavigate= () => {
    navigate("/signup");
  };


  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
        <div className="signin-signup" >
          <form action="#" className="sign-in-form loginForm" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>

            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' type='text' placeholder='Username' value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            </div>
            {errors.username && <p className="error">{errors.username}</p>}
            
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' type='password'   placeholder='Password' value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            
            <button className='btn' >Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
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
  )}

  export default Login
 