import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <View style={styles.body}>
        <Text>lists</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
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
    backgroundColor: 'green',
    padding: 16,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
