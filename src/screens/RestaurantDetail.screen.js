import React from 'react';
import { Box, Text, SectionList, Center, Heading, Flex, Spacer, Icon } from 'native-base';
import RestaurantInfoCard from '../components/RestaurantInfoCard.component';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const RestaurantDetailScreen = ({ route }) => {
  const data = [
    {
      title: 'Breakfast',
      data: ['cyan.100', 'cyan.200', 'cyan.300', 'cyan.400', 'cyan.500'],
      icon: <MaterialCommunityIcons name="food-apple" />,
    },
    {
      title: 'Lunch',
      data: ['yellow.100', 'yellow.200', 'yellow.300', 'yellow.400', 'yellow.500'],
      icon: <Ionicons name="fast-food" />,
    },
    {
      title: 'Dinner',
      data: ['violet.100', 'violet.200', 'violet.300', 'violet.400', 'violet.500'],
      icon: <MaterialCommunityIcons name="food-fork-drink" />,
    },
  ];

  const { restaurant } = route.params;
  return (
    <Flex flex={1}>
      <RestaurantInfoCard restaurant={restaurant} />
      <SectionList
        w="100%"
        mb="4"
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Box py="4" px="12">
            {item}
          </Box>
        )}
        renderSectionHeader={({ section: { title, icon } }) => (
          <Center flexDirection="row" justifyContent="space-around" mx="4" h="50px">
            <Flex flexDirection="row" alignItems="center" flex="1">
              <Icon size="5" mr={4} as={icon} />
              <Text fontSize="md">{title}</Text>
            </Flex>
            <Spacer />
            <Icon size="5" as={<Ionicons name="chevron-up" />} />
          </Center>
        )}
      />
    </Flex>
  );
};

export default RestaurantDetailScreen;
