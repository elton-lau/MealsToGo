import React, { useState, createContext, useEffect, useMemo } from 'react';
import { restaurantListTransform, restaurantListRequest } from './restaurants.service';

export const RestaurantListContext = createContext();
export const RestaurantListContextProvider = ({ children }) => {
  return (
    <RestaurantListContext.Provider value={{ restaurantList: [1, 2, 3] }}>
      {children}
    </RestaurantListContext.Provider>
  );
};
