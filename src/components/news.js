import React, { useState, useEffect, Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    Linking,
  } from 'react-native';

  export default class News extends React.Component{
      render(){
        return(
            <View>
                <Text style={seperator}></Text>
                <Image
                style={styles.imageUrl}
                source={{ uri: this.props.urltoImage}}
                />
            </View> 
        );
      }
  }


  const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    newsline: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold", 
        fontSize:18 ,  
    },
    coinPrice : {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    image: {
        marginLeft: 15,
        width: 35,
        height: 35,
    },
    imageUrl: {
        marginLeft: 15,
        marginTop: 10,
        width: null,
        flex: 1,
        aspectRatio:1,
        height:"60%"

    },
    moneySymbol: {
        fontWeight: "bold",
    },
   
})


const { 
    coinSymbol,
    coinPrice,
    seperator,
    newsline
} = styles;
