import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';
import { restaurantListTransform, restaurantListRequest } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantListContext = createContext();

export const RestaurantListContextProvider = ({ children }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurantList([]);

    setTimeout(() => {
      restaurantListRequest(loc)
        .then(restaurantListTransform)
        .then((restaurants) => {
          setIsLoading(false);
          setRestaurantList(restaurants);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
  }, [location]);

  return (
    <RestaurantListContext.Provider value={{ restaurantList, isLoading, error }}>
      {children}
    </RestaurantListContext.Provider>
  );
};
