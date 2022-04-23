import { View, Text, ScrollView } from 'native-base';
import React from 'react';
import MapCalloutComponent from './MapCalloutComponent';
import { TouchableOpacity } from 'react-native';

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <View padding="10px">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, index) => {
          console.warn('favourite navigate', restaurant);
          return (
            <View key={index} mr={2}>
              <TouchableOpacity onPress={() => onNavigate('RestaurantDetail', { restaurant })}>
                <MapCalloutComponent restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavouritesBar;
