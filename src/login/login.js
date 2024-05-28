import {  useState,useEffect,useContext } from "react";
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {jwtDecode} from 'jwt-decode';
import {UserContext} from '../context/userContext';

import './login.css';

function Login() {
  const [username,setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {setUser}=useContext(UserContext);
  const navigate=useNavigate();

const screenWidth = window.innerWidth;
const width = screenWidth < 600 ? 250 : 400;

const handleSignOut=(e)=>{
  setUser({});
  document.getElementById("signInDiv").hidden=false;
  navigate('/login');


}

  const handleSubmit= async(e)=>{
      e.preventDefault();
try{
  await axios.post('http://localhost:5000/api/auth/login',{username,password});
  navigate('/');


}catch(error){
  console.log(error);
}
  }
const handleCallbackResponse=(response)=>{
  console.log('Encoded JWTid token', response.credential);
  const userObject= jwtDecode(response.credential);
  setUser(userObject);
  console.log(userObject);
  document.getElementById("signInDiv").hidden=true;
  navigate('/');

}
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback:handleCallbackResponse
    });

    google.accounts.id.renderButton(
     
      document.getElementById("signInDiv"), 
      {
        'scope': 'profile email',
        'width': width,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
      }
    );
},[])
  
  return (
    <div className='app'>
    <div className="login-parent">
    <div className='login-div'>
        <div className="text-div">
        <h4 className-text="h3-text">Login </h4>
        <small className-text="h5-text">Enjoy the world of possiblities!</small>
        </div>
        <div className="login-input-div">
<input placeholder='Enter Username'  onChange={(e)=>setUsername(e.target.value)} className="login-input"/>
<div className="login-password-input-container">
<input
type={showPassword ? 'text' : 'password'}
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
className="login-inputs"
/>
<span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
{showPassword ? (
<FontAwesomeIcon icon={faEye} className='icon' />
) : (
<FontAwesomeIcon icon={faEyeSlash}  className='icon'/>
)}
</span>
</div>
<div className='forgot-pswd-div'>
  <small><Link to='/forgot_password' className='link'>
    Forgot Password?
    </Link>
    </small>
</div>
      <button onClick={handleSubmit} className="btn">Login</button>
      </div>
      <div className='line-div'>
        <hr className="line"/> Or With <hr className="line"/>
      </div>
      <div id="signInDiv" className="signup-div">

      </div>
      <div className="account-div">
<small>Don't have an account? <Link to='/register' className="login-link">
     <p className="login-p">Register</p>
    </Link>
    </small>
     </div>
    </div>
</div>
        
    
    </div>
  );
}

export default Login;
