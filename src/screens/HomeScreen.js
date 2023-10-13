import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
    <View>
      <Text style={styles.text}>Home View</Text>
      <Button 
      onPress={() => props.navigation.navigate('Components')}
      title='Go to Components View'
       />
      <TouchableOpacity
      onPress={() => props.navigation.navigate('List')}
      >
        <Text style={styles.btnTouchable}>GO TO LIST VIEW</Text>
      </TouchableOpacity>
      <Button 
      onPress={() => props.navigation.navigate('Images')}
      title='Go to Images view'
       />
       <Button 
      onPress={() => props.navigation.navigate('Counter')}
      title='Go to Counter view'
       />
      <Button 
      onPress={() => props.navigation.navigate('Color')}
      title='Go to Color view'
       />
        <Button 
      onPress={() => props.navigation.navigate('Square')}
      title='Go to Square view'
       />
        <Button 
      onPress={() => props.navigation.navigate('Reducer')}
      title='Go to Square Reducer view'
       />
        <Button 
      onPress={() => props.navigation.navigate('Box')}
      title='Go to box screen view'
       />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginVertical: 20,
    marginHorizontal: 100
  },
  btnTouchable: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 120,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'gray',
  }
});

export default HomeScreen;
