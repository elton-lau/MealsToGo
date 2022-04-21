import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Searchbar from '../components/Searchbar';
import RestaurantInfoCard from '../components/RestaurantInfoCard.component';
import { FlatList, Box, Flex, Spinner, HStack } from 'native-base';
import { RestaurantListContext } from '../services/restaurants/restaurants.context';

const RestaurantListScreen = () => {
  const { isLoading, error, restaurantList } = useContext(RestaurantListContext);
  console.log('restaurants list', restaurantList);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Spinner color="cyan.500" size="lg" />
      </Flex>
    );
  }

  return (
    <Box style={styles.container} safeArea>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <Box>
        <FlatList
          data={restaurantList}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }, index) => <RestaurantInfoCard restaurant={item} key={index} />}
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
