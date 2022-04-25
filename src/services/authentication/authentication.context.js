import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest.then((u) => {
      setUser(u);
      setIsLoading(false).catch((e) => {
        setError(e);
        setIsLoading(false);
      });
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin, isAuthenticated: !!user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
