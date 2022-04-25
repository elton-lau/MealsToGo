import { NativeBaseProvider, extendTheme } from 'native-base';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantListContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouriteContextProvider } from './src/services/favourite/favourite.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import AppNavigator from './src/utils/app.navigator';
import { useState, useEffect } from 'react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    <NativeBaseProvider theme={theme}>
      <AuthenticationContextProvider>
        <LocationContextProvider>
          <RestaurantListContextProvider>
            <FavouriteContextProvider>
              <AppNavigator />
            </FavouriteContextProvider>
          </RestaurantListContextProvider>
        </LocationContextProvider>
      </AuthenticationContextProvider>
    </NativeBaseProvider>
  );
}
