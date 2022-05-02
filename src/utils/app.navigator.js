import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestaurantListScreen from '../screens/restaurant-list.screen';
import { AccountNavigator } from './account.navigator';
import { RestaurantsNavigator } from './restaurants.navigator';
import MapScreen from '../screens/MapScreen';
import { AuthenticationContext } from '../services/authentication/authentication.context';
import { View, Text } from 'native-base';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Restaurants') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              } else if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
          <Tab.Screen
            name="Settings"
            component={RestaurantListScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
}
