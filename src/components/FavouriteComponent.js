import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FavouriteContext } from '../services/favourite/favourite.context';
import { AntDesign } from '@expo/vector-icons';
import styled from '@emotion/native';
import { IconButton } from 'native-base';

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);
  const isFavorite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <IconButton
      position="absolute"
      top="20px"
      right="20px"
      zIndex="9"
      bg="transparent"
      borderColor="#20232a"
      onPress={() => (!isFavorite ? addToFavourites(restaurant) : removeFromFavourites(restaurant))}
      icon={
        <AntDesign
          name={isFavorite ? 'heart' : 'hearto'}
          size="24"
          color={isFavorite ? 'red' : 'white'}
        />
      }
    />
  );
};

export default Favourite;
