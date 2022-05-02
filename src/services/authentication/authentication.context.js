import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        console.error('error', err);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Password do not match');
      return;
    }
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        console.error('error', err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin, onRegister, isAuthenticated: !!user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
