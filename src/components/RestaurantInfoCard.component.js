import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  VStack,
  Box,
  Divider,
  Image,
  Flex,
  AspectRatio,
  HStack,
  Heading,
  Text,
  Spacer,
} from 'native-base';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import star from '../../assets/star.svg';
import Favourite from './FavouriteComponent';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos = ['https://via.placeholder.com/400x200'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Flex border="1" borderRadius="md" backgroundColor="white" padding="4" mb={3}>
      <Favourite restaurant={restaurant} />
      <AspectRatio
        width="100%"
        ratio={{
          base: 4 / 2,
        }}>
        <Image source={{ uri: photos[0] }} alt={name} resizeMode="cover" />
      </AspectRatio>
      <Heading pt={2} fontFamily="heading" size="sm">
        {name}
      </Heading>
      <Flex direction="row" my={2}>
        {ratingArray.map((_, index) => (
          <Icon
            key={`star-${placeId}-${index}`}
            size="5"
            color="yellow.400"
            as={<MaterialIcons name="star" />}
          />
        ))}
        <Spacer />
        {isClosedTemporarily && (
          <Text fontFamily="heading" color="red.400" pr={2} textAlign="center" fontSize="xs">
            CLOSED TEMPORARILY
          </Text>
        )}
        <Icon size="5" color="red.400" as={<MaterialIcons name="cancel-presentation" />} />
      </Flex>

      <Text fontSize="xs">{address}</Text>
    </Flex>
  );
};

export default RestaurantInfoCard;
