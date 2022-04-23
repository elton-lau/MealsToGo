import { NativeBaseProvider, extendTheme } from 'native-base';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantListContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import AppNavigator from './src/utils/app.navigator';

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
    <NativeBaseProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantListContextProvider>
          <AppNavigator />
        </RestaurantListContextProvider>
      </LocationContextProvider>
    </NativeBaseProvider>
  );
}
