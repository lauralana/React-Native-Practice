import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 25;

const reducer = (state, action) => {
// state === {red: number, green: number, blue: number}
// action === {colorToChange: 'red' || 'green || "blue", amount: 15 || -15}
switch (action.colorToChange){
    case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state, red: state.red + action.amount};
    case 'blue':
        return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount};
    case 'green':
        return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount};
    default:
        return state;
}
};

export default function SquareScreen() {  
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    blue: 0,
    green: 0,
  });

  return (
    <View>
      <Text style={styles.headerStyle}>Square Reducer Screen View</Text>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: color_increment})}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * color_increment})}
        color="RED"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: color_increment})}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * color_increment})}
        color="BLUE"
      />
      <ColorCounter
        color="GREEN"
        onIncrease={() => dispatch({ colorToChange: 'green', amount: color_increment})}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * color_increment})}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          marginVertical: 10,
          marginHorizontal: 140,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 50,
  },
});
