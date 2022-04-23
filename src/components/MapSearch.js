import { VStack, Box, Divider, Heading, Input, Icon, Flex, Center } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState, useEffect } from 'react';
import { LocationContext } from '../services/location/location.context';

function MapSearch() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <Input
      bg="white"
      onSubmitEditing={() => search(searchKeyword)}
      onChangeText={(text) => setSearchKeyword(text)}
      value={searchKeyword}
      placeholder="Search Restuarants & Places"
      fontFamily="heading"
      borderRadius="25"
      py="2"
      px="1"
      width="100%"
      fontSize="14"
      InputLeftElement={
        <Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />
      }
    />
  );
}

export default MapSearch;
