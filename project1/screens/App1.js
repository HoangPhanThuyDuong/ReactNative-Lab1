import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>Hello-world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color:'green',
    fontStyle:'italic',
    fontSize:18,
    width:120, height:120,
    backgroundColor: 'pink',
    textAlign: 'center',
    textAlignVertical:'center'
  }
});

export default App;