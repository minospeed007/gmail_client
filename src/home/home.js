import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import './home.css';

function Home() {
  const { user, } = useContext(UserContext); 

  return (
    <section >
      
      <div className='div-root'>
      
        <div className='welcome-div'>
          {user ? (
            <div>
              <div className='img-div'>
                <img src={user.picture} alt='User' />
              </div>
              <h1>Welcome, {user.name}!</h1>
            </div>
          ) : (
            <h1>Welcome!</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
