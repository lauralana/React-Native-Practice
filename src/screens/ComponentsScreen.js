import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default function ComponentsScreen() {
const [name, setName] = useState('');
const [secret, setSecret] = useState('');

return (
    <View > 
        <Text style={styles.headerStyle}>
            Components Screen View
        </Text>
        <Text style={styles.subHeader}> I solemnly swear that I am up to no good </Text>
        <TextInput 
        style={styles.input}
        autoCorrect={false}
        placeholder="type your name"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        />
        <TextInput 
        style={styles.input}
        autoCorrect={false}
        placeholder="your secret"
        value={secret}
        secureTextEntry={true}
        onChangeText={(newValue) => setSecret(newValue)}
        />
        {secret.length < 5 ? <Text>Secret need at least 5 characters</Text> : null}
        <Text style={styles.text}> My name is: {name}</Text>
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
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 15,
        marginVertical: 20,
        marginHorizontal: 100
    }
});