import { View, Text, Image } from 'native-base';
import React from 'react';
import { Svg, Image as ImageSvg } from 'react-native-svg';

const MapCallout = ({ restaurant }) => {
  return (
    <View padding="10px" maxWidth="120px" alignItems="center">
      <Svg width={120} height={100}>
        <ImageSvg
          width={'100%'}
          height={'100%'}
          preserveAspectRatio="xMidYMid slice"
          href={{ uri: restaurant.photos[0] }}
        />
      </Svg>
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </View>
  );
};

export default MapCallout;
