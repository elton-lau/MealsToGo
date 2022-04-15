import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import Searchbar from './src/components/Searchbar';
import RestaurantListScreen from './src/screens/restaurant-list.screen';

export default function App() {
  return (
    <NativeBaseProvider>
      <RestaurantListScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
