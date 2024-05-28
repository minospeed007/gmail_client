import {  useState,useEffect } from "react";
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {jwtDecode} from 'jwt-decode';

import './register.css';

const Register=()=>{
const [showPassword, setShowPassword] = useState(false);
const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [user,setUser]=useState('');

const navigate=useNavigate();
const screenWidth = window.innerWidth;
const width = screenWidth < 600 ? 250 : 400;


const handleSubmit= async(e)=>{
        e.preventDefault();
try{
    await axios.post('http://localhost:5000/api/auth/register',{
        name,email,username,password
    });
    console.log(user.password);
    navigate('/login');


}catch(error){
    console.log(error);
}
    }
 const handleCallbackResponse=(response)=>{
        console.log('Encoded JWTid token', response.credential);
        const userObject= jwtDecode(response.credential);
       setUser(userObject);
        document.getElementById("signInDiv").hidden=true;
      
      }
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
          client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback:handleCallbackResponse
        });
    
        google.accounts.id.renderButton(
            document.getElementById("signIn"), 
            {
              'scope': 'profile email',
              'width': width,
              'height': 50,
              'longtitle': true,
              'theme': 'dark',
            }
          );
      },[])
    return(
        <div className="register-parent">
            <div className='register-div'>
                <div className="text-div">
                <h4 className-text="h3-text">Create an account</h4>
                <small className-text="h5-text">Enjoy the world of possiblities!</small>
                </div>
                <div className='input-div'>
<input placeholder='Enter Name' name='name' onChange={(e)=>setName(e.target.value)} className="register-input"/>

 <input placeholder='Enter Email'  name ='email' onChange={(e)=>setEmail(e.target.value)} className="register-input"/>
 <input placeholder='Enter Username' name='username'  onChange={(e)=>setUsername(e.target.value)} className="register-input"/>
 <div className="password-input-container">
  <input name='password'
  type={showPassword ? 'text' : 'password'}
  placeholder="Enter Password"
  onChange={(e)=>setPassword(e.target.value)}
  className="register-inputs"
  />
  <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? (
      <FontAwesomeIcon icon={faEye} className="icon"/>
    ) : (
      <FontAwesomeIcon icon={faEyeSlash}  className="icon"/>
    )}
  </span>
</div>
<button onClick={handleSubmit} className="register-btn">Register</button>

</div>
              <div className='line-div'>
                <hr className="line"/><p className='or'> Or With</p>  <hr className="line"/>
              </div>
              <div id="signIn" className="signup-div">

              </div>
              <div className="account-div">
      <small>Already have an account? <Link to='/login' className="login-link">
             <p className="login-p">Login</p>
            </Link>
            </small>
             </div>
            </div>
        </div>
    )
}

export default Register;