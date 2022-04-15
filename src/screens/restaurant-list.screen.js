import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Searchbar from '../components/Searchbar';
import RestaurantInfoCard from '../components/RestaurantInfoCard.component';


const RestaurantListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.body}>
        <RestaurantInfoCard />
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
