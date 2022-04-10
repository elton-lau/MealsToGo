import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import Searchbar from './src/components/Searchbar';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.body}>
          <Text>lists</Text>
        </View>
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
