import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
const name = 'Laura Lana';

return (
    <View > 
        <Text style={styles.headerStyle}>
            Components Screen View
        </Text>
        <Text style={styles.subHeader}> I solemnly swear that I am up to no good </Text>
        <Text style={styles.footer}> ps: {name} </Text>
    </View>
)
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 20,
        marginHorizontal: 60
    },
    subHeader: {
        fontSize: 20,
        marginHorizontal: 20,
        color: 'red'
    },
    footer: {
        fontSize: 15,
        marginVertical: 290,
        marginHorizontal: 150,
    }
});