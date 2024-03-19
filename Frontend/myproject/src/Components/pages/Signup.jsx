import React,{useState} from 'react'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


function SignUp({ addData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newevents = {
      name: name,
      email: email,
      password: password,
      
    };
    addData(newevents);
    
    setName('');
    setEmail('');
    setPassword('');
    nav('/');
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      
      nav("/");
    }
  };
  const handleNavigate= () => {
    nav("/login");
  };

  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
      <div className="signin-signup" >
      <form action="#" className="sign-in-form loginForm" onSubmit={handleSubmit}>
      <h2 className="title">Sign Up</h2>

      <div className='input-field'>
      <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
      <input className='LoginInput' type='text' placeholder='Username' value={name}
      onChange={(e) => setName(e.target.value)}/>
      </div>
      {errors.username && <p className="error">{errors.username}</p>}
      <div className='input-field'>
      <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
      <input className='LoginInput' type='email' placeholder='Email' value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      </div>
      {errors.email && <p className="error">{errors.email}</p>}
      <div className='input-field'>
      <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
      <input className='LoginInput' type='password'   placeholder='Password' value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      <div className='input-field'>
      <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
      <input className='LoginInput' type='password'   placeholder='ConfirmPassword' value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <button className='btn' onClick={handleSubmit}>Sign Up</button>
     
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
    <div className="panels-container">
    <div className="panel left-panel">
      <div className="contentLogin">
        <h3 className='loginh3'>One of us ?</h3>
        <p className='loginp'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <button className="btn transparent" onClick={handleNavigate}>
          Sign in
          </button>
      </div>
      {/*<img src="/assets/dog.jpg" class="image" alt="" />*/}
    </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp