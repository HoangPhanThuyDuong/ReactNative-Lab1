import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet, TouchableHighlight, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title='button1' onPress={()=>alert("Hello Dương Thần")} />
      <TouchableHighlight
        onPress={()=>alert("hello 2!")}
        style={styles.button}>
        <Text style={styles.TextStyle}>button2</Text>
      </TouchableHighlight>
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
  button:{
    backgroundColor: "blue",
    marginTop:10,
    alignItems:'center',
    padding:10,
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