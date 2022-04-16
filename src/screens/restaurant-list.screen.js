import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Searchbar from '../components/Searchbar';
import RestaurantInfoCard from '../components/RestaurantInfoCard.component';
import { FlatList, Box, Flex } from 'native-base';

const RestaurantListScreen = () => {
  return (
    <Box style={styles.container} safeArea>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <Box>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          renderItem={(item) => <RestaurantInfoCard />}
        />
      </Box>
      {/* <StatusBar style="auto" /> */}
    </Box>
  );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  search: {
    padding: 16,
  },
});
