import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './userContext'; 

const useSignOut = () => {
  const navigate = useNavigate();
  const { handleSignOut } = useContext(UserContext);

  const signOut = () => {
    handleSignOut();
    navigate('/login');
  };

  return signOut;
};

export default useSignOut;
