import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { whileStatement } from '@babel/types';

const Button = ({onPress, children, backgroundColor, borderColor, borderWidth, textColor, marginTop}) => {
    return(
        <TouchableOpacity 
            style={{
                backgroundColor: backgroundColor,
                marginTop: marginTop,
                padding: 10,
                width: '100%',
                borderRadius: 24,
                borderColor: borderColor,
                borderWidth: borderWidth,
                alignItems: 'center',
                }} 
            onPress = {onPress}>
            <Text 
                style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 18
                }}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export {Button};