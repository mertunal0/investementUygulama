import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                autoCorrect={false}
                onChangeText = {onChangeText}
                placeholder = {placeholder}
                style = {styles.input}
                secureTextEntry = {secureTextEntry}
                value = {value}
                >
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#333',
        fontSize: 18,
        fontWeight: "bold",
        width: '100%'
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#666',
        fontSize: 17,
        fontWeight: "normal",
        width: '100%'
    }
});

export {Input};