import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

export default function SquareScreen() {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    
    const color_increment = 25;

    const setColor = (color, change) => {
        switch (color) {
           case 'red' :
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
           case 'blue' :
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
           case 'green': 
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
           default : null
        }
    };

return (
    <View > 
        <Text style={styles.headerStyle}>
            Square Screen View
        </Text>
        <ColorCounter 
            onIncrease={() => setColor('red', + color_increment)}
            onDecrease={() => setColor('red', -1 * color_increment)}
            color="RED"
        />
        <ColorCounter 
            onIncrease={() => setColor('blue', + color_increment)}
            onDecrease={() => setColor('blue', -1 * color_increment)}
            color="BLUE"
        />
        <ColorCounter 
            color="GREEN"
            onIncrease={() => setColor('green', + color_increment)}
            onDecrease={() => setColor('green', -1 * color_increment)}
        />
        <View 
            style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red},${green},${blue})`,
                marginVertical: 10,
                marginHorizontal: 140,
              }}
            />
    </View>
)
};
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginBottom: 5,
        marginHorizontal: 60
    },
});