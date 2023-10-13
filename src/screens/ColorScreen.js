import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

export default function CounterScreen() {
const [color, setColor] = useState([]);

return (
    <View > 
        <Text style={styles.headerStyle}>
            Color Screen View
        </Text>
        <Button 
            title="add a color" 
            onPress={() => {
            setColor([...color, randomRgb()])
        }}
        />
       
        <FlatList 
        keyExtractor={(item) => item}
        data={color}
        renderItem={({item}) => {
            return  <View style={{height:100, width:100, backgroundColor:item}}/>
        }}
        />
    </View>
)
};
const randomRgb = () => {
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

return `rgb(${red}, ${green}, ${blue})`;
}
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 60
    },
});