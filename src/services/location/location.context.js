import { locationRequest, locationTransform } from './location.service';
import React, { createContext, useState, useEffect, useCallback } from 'react';

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.warn('search error', err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider value={{ isLoading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
}
