import React from 'react';
import { Text } from 'react-native';
import RestaurantListScreen from '../screens/restaurant-list.screen';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantDetailScreen from '../screens/RestaurantDetail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantListScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  );
};
