// LoginModalContext.js
import React, { useState, createContext, useContext } from "react";

const LoginModalContext = createContext();

export const useLoginModal = () => useContext(LoginModalContext);

export const LoginModalProvider = ({ children }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <LoginModalContext.Provider value={{ isLoginVisible, setIsLoginVisible }}>
      {children}
    </LoginModalContext.Provider>
  );
};
