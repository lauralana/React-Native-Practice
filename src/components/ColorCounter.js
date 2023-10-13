import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

export default function ColorCounter({color, onIncrease, onDecrease}) {

    return (
        <View>
          <Text>{color}</Text>
          <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
          <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
      );
};
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 60
    },
});