import {Link} from 'react-router-dom';
import  { useContext } from 'react';
import logo from '../assest/crypto_img.jpg';
import useSignOut from '../context/signOutContext';
import { UserContext } from '../context/userContext';
import './nav.css';


const Nav=()=>{
const { user, } = useContext(UserContext); 

const signOut = useSignOut();

    return(<>
    <div className='logout-div'>
      <div className='logo-div'>
        <div className='img-div'>
        <img src={logo} className='logo-img'/>

        </div>
        <h1 className='afia-h1'>Afia</h1>
      </div>
        {user ? (
          <button onClick={signOut} className='logout-btn'>
            Sign out
          </button>
        ) : (
          <Link to='/login'>
            <button className='logout-btn'>Login</button>
          </Link>
        )}
      </div>

    </>
    )
}

export default Nav;