import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Searchbar from '../components/Searchbar';
import RestaurantInfoCard from '../components/RestaurantInfoCard.component';
import { FlatList, Box, Flex, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { RestaurantListContext } from '../services/restaurants/restaurants.context';

const RestaurantListScreen = ({ navigation }) => {
  const { isLoading, error, restaurantList } = useContext(RestaurantListContext);
  //console.log('restaurants list', restaurantList);

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
          keyExtracxtor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}>
                <RestaurantInfoCard restaurant={item} key={index} />
              </TouchableOpacity>
            );
          }}
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
