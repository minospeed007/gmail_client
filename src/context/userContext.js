import React, { createContext, useState } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSignOut = () => {
    setUser(null);
   const signInDiv = document.getElementById("signInDiv");
    if (signInDiv) {
        signInDiv.hidden = false;
      }
  
  };

  return (
    <UserContext.Provider value={{ user, setUser,handleSignOut }}>
      {children}
    </UserContext.Provider>
  );
};
