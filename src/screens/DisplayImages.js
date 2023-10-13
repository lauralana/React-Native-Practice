import React from "react";
import { Text, StyleSheet, View, } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function DisplayImages() {

return (
    <View > 
        <Text style={styles.headerStyle}>Display Images View</Text>
        <ImageDetail title="Forest" image={require('../../assets/images/forest.jpg')}/>
        <ImageDetail title="Beach" image={require('../../assets/images/beach.jpg')}/>
        <ImageDetail title="Mountain" image={require('../../assets/images/mountain.jpg')}/>
    </View>
)
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 80
    },

});