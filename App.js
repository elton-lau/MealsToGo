import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Searchbar from './src/components/Searchbar';
import RestaurantListScreen from './src/screens/restaurant-list.screen';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantListContextProvider } from './src/services/restaurants/restaurants.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  settings: 'Settings',
};

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const theme = extendTheme({
    fonts: {
      heading: 'Lato_400Regular',
      body: 'Oswald_400Regular',
      mono: 'Oswald_400Regular',
    },
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <RestaurantListContextProvider>
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
              component={RestaurantListScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={RestaurantListScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={RestaurantListScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantListContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
