import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { VStack, Box, Divider, Image, Flex, AspectRatio, HStack } from 'native-base';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'restaurant',
    icon,
    photos = ['https://via.placeholder.com/400x200'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = restaurant;
  return (
    <View>
      <Box border="1" borderRadius="md" backgroundColor="white" padding="4">
        <AspectRatio
          width="100%"
          ratio={{
            base: 4 / 2,
          }}>
          <Image src={photos[0]} alt={name} resizeMode="cover" />
        </AspectRatio>
        <HStack pt="4">
          <Text>Restaurant</Text>
        </HStack>
      </Box>
    </View>
  );
};

export default RestaurantInfoCard;
