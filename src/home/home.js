import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import useSignOut from '../context/signOutContext';

function Home() {
  const { user,handleSignOut } = useContext(UserContext); 
  const signOut=useSignOut();

  return (
    <div className='home-div'>
        <div className='logout-div'>
            {user ? (<button onClick={signOut} className='logout-btn'>
                Sign out</button>):(<Link to='/login'>
                <button className='logout-btn'>Login</button>
            </Link>
        )}
        </div>
      {user ? (
        <h3>Welcome, {user.name}!</h3>
      ) : (
        <h1>Welcome!</h1>
      )}
    </div>
  );
}

export default Home;
