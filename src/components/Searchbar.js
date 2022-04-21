import { VStack, Box, Divider, Heading, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState, useEffect } from 'react';
import { LocationContext } from '../services/location/location.context';

function Searchbar() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, [search, searchKeyword]);

  return (
    <VStack space={5} w="100%">
      <Input
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
        placeholder="Search Restuarants & Places"
        fontFamily="heading"
        width="100%"
        borderRadius="25"
        py="2"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />
        }
      />
    </VStack>
  );
}

export default Searchbar;
