import React from "react";
import { Text, StyleSheet, View, Image  } from "react-native";

export default function ImageDetail(props) {

return (
    <View > 
        <Image source={props.image}/>
        <Text style={styles.propsStyle}>{props.title}</Text>
    </View>
)
};

const styles = StyleSheet.create({
    propsStyle: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 40
    },

});