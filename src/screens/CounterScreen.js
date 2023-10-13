import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function CounterScreen() {
const [count, setCount] = useState(0);

return (
    <View > 
        <Text style={styles.headerStyle}>
            Counter Screen View
        </Text>
        <Button title="+" onPress={() => setCount(count +1)}/>
        <Text style={styles.count}>Counter: {count} </Text>
        <Button title="-" onPress={() => setCount(count -1)}/>
    </View>
)
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 60
    },
    count: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 150
    }
});