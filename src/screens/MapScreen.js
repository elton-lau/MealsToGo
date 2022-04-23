import { Text, View, Box, Flex, Spinner } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from '@emotion/native';
import MapSearch from '../components/MapSearch';
import { LocationContext } from '../services/location/location.context';
import { RestaurantListContext } from '../services/restaurants/restaurants.context';
import MapCallout from '../components/MapCalloutComponent';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { isLoading, error, restaurantList } = useContext(RestaurantListContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <Box position="absolute" zIndex={999} top="50px" maxWidth="100%" px={3}>
        <MapSearch />
      </Box>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.05,
        }}>
        {restaurantList.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() => navigation.navigate('RestaurantDetail', { restaurant: restaurant })}>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
