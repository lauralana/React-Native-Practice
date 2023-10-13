import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function BoxScreen() {
  return (
    <View>
      <Text style={styles.headerStyle}> Box Screen View </Text>
      <Text style={styles.lesson}> LESSON 1 </Text>
      <View style={styles.view}>
        <Text style={styles.practice}> CHILD 1 </Text>
        <Text style={styles.practice}> CHILD 2 </Text>
        <Text style={styles.practice}> CHILD 3 </Text>
      </View>
      <Text style={styles.lesson}> LESSON 2 </Text>
      <View style={styles.view2}>
        <Text style={styles.practice}> CHILD 1 </Text>
        <Text style={styles.practice}> CHILD 2 </Text>
        <Text style={styles.practice}> CHILD 3 </Text>
      </View>
      <Text style={styles.lesson}> LESSON 3 </Text>
      <View style={styles.view3}>
        <Text style={styles.practice1}> CHILD 1 </Text>
        <Text style={styles.practice2}> CHILD 2 </Text>
        <Text style={styles.practice3}> CHILD 3 </Text>
      </View>
      <Text style={styles.lesson}> LESSON 4 </Text>
      <View style={styles.view4}>
        <Text style={styles.practice1a}> CHILD 1 </Text>
        <Text style={styles.practice2b}> CHILD 2 </Text>
        <Text style={styles.practice3c}> CHILD 3 </Text>
      </View>
      <Text style={styles.lesson}> LESSON 5 </Text>
      <View style={styles.view5}>
        <View style={styles.practiceA} /> 
        <View style={styles.practiceB} /> 
        <View style={styles.practiceC} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 25,
    marginBottom: 5,
    marginHorizontal: 80,
  },
  lesson: {
    marginTop: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  view: {
    borderWidth: 3,
    borderColor: "green",
    alignItems: "center",
  },
  practice: {
    borderWidth: 1,
    borderColor: "red",
  },
  view2: {
    borderWidth: 3,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  view3: {
    borderWidth: 3,
    borderColor: "green",
    height: 80,
    alignItems: 'stretch',
  },
  practice1: {
    borderWidth: 1,
    borderColor: "red",
  },
  practice2: {
    borderWidth: 1,
    borderColor: "red",
    position: 'absolute',
    ...StyleSheet.absoluteFillObject
  },
  practice3: {
    borderWidth: 1,
    borderColor: "red",

  },
  view4: {
    borderWidth: 3,
    borderColor: "green",
    height: 100,
  },
  practice1a: {
    borderWidth: 1,
    borderColor: "red",
    flex:1,
    alignSelf: 'flex-start',
  },
  practice2b: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    alignSelf: 'center',
  },
  practice3c: {
    borderWidth: 1,
    borderColor: "red",
    flex:3,
    alignSelf: 'flex-end',
  },
  view5: {
    borderWidth: 3,
    borderColor: "green",
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  practiceA: {
    height:50,
    width: 50,
    backgroundColor: 'pink',
  },
  practiceB: {
    height:50,
    width: 50,
    backgroundColor:'blue',
    alignSelf: 'flex-end'
  },
  practiceC: {
    height:50,
    width: 50,
    backgroundColor:'purple',
  },
});
