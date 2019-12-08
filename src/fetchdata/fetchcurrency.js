import React, { useState, useEffect, Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    Linking,
    ScrollView
  } from 'react-native';
 

import { images } from '../views/moneyicons/icons';
import PTRView from 'react-native-pull-to-refresh';

   

class Stocklines extends React.Component {
    constructor(props){
        super();
        this.state = {
            stocks : {},
            dolar : ["Dolar"],
            euro : ["Euro"],
            yen : ["Yen"],
            pound : ["Pound"],
            gold : [""],
            title : [],
            description : [],
            url : [],
            urltoImage: [],
            content : []
        }
        }

    subStringRet(response){
        return response.toString().substring(0,6);
    }
    async getRates(){

        fetch("https://api.exchangeratesapi.io/latest?symbols=USD,TRY",
        {
            method :"GET"
        
        })
        .then((response) => response.json())
        .then((responseJson) => { 
            this.setState({
                euro : [...this.state.euro,this.subStringRet(responseJson["rates"]["TRY"])]
            })
        });
    fetch("https://api.exchangeratesapi.io/latest?base=USD",
    {
        method :"GET"
    
    })
    .then((response) => response.json())
    .then((responseJson) => { 
        this.setState({
            dolar : [...this.state.dolar,this.subStringRet(responseJson["rates"]["TRY"]) ]
        })
        
    }); 
    fetch("https://api.exchangeratesapi.io/latest?base=JPY",
    {
        method :"GET"
    
    })
    .then((response) => response.json())
    .then((responseJson) => { 
        this.setState({
            yen : [...this.state.yen,this.subStringRet(responseJson["rates"]["TRY"])]
        })
        
    });    
    fetch("https://api.exchangeratesapi.io/latest?base=GBP",
    {
        method :"GET"
    
    })
    .then((response) => response.json())
    .then((responseJson) => { 
        this.setState({
            pound : [...this.state.pound,this.subStringRet(responseJson["rates"]["TRY"])]
        })
        
    });       

    }
   componentDidMount(){
    this.timer = setInterval(()=> this.getRates(), 10000)

    fetch("https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=b8867e244f204c9791848936070a7a34",
    {
        method :"GET"
    
    })
    .then((response) => response.json())
    .then((responseJson) => { 
        for (let index = 0; index < responseJson["articles"].length; index++) {
            this.setState({
                
                title : [... this.state.title , [responseJson["articles"][index]["title"]]],
                description : [... this.state.description , [responseJson["articles"][index]["description"]]],
                urltoImage : [... this.state.urltoImage , [responseJson["articles"][index]["urlToImage"]]],
                content : [... this.state.content , [responseJson["articles"][index]["content"]]],
                url : [... this.state.url , [responseJson["articles"][index]["url"]]]
            })  
        } 
    });    
        
   }
   componentWillMount(){
    clearInterval(this.timer);
   }
   _refresh = function() {
        return new Promise((resolve) => {
            setTimeout(()=>{resolve()}, 2000)
        });
    }
  
    render(){
        return (
            <View>   
                <View style={{flexDirection: 'row'}}>
                    <View style={{borderLeftWidth:1, borderColor : "red"}} >
                        <Image
                            style={styles.image}
                            source={{ uri: images["Dolar"] }}
                        />
                        <Text style={coinSymbol}>{this.state.dolar[0]}</Text>
                        <Text style={coinPrice}>{this.state.dolar[1]}</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: images["Euro"] }}
                        />
                        <Text style={coinSymbol}>{this.state.euro[0]}</Text>
                        <Text style={coinPrice}>{this.state.euro[1]}</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: images["Pound"] }}
                        />
                        <Text style={coinSymbol}>{this.state.pound[0]}</Text>
                        <Text style={coinPrice}>{this.state.pound[1]}</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: images["Yen"] }}
                        />
                        <Text style={coinSymbol}>{this.state.yen[0]}</Text>
                        <Text style={coinPrice}>{this.state.yen[1]}</Text>
                    </View>
                </View>
                <PTRView onRefresh={this._refresh} >
                    <ScrollView>
                        <View>
                            <Text style={seperator}></Text>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[0])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[0]))}
                            >{this.state.title[0]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[1])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[1]))}
                            >{this.state.title[1]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[2])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[2]))}
                            >{this.state.title[2]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[3])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[3]))}
                            >{this.state.title[3]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[4])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[4]))}
                            >{this.state.title[4]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[5])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[5]))}
                            >{this.state.title[5]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[6])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[6]))}
                            >{this.state.title[6]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[7])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[7]))}
                            >{this.state.title[7]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[8])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[8]))}
                            >{this.state.title[8]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[9])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[9]))}
                            >{this.state.title[9]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[10])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[10]))}
                            >{this.state.title[10]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[11])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[11]))}
                            >{this.state.title[11]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[12])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[12]))}
                            >{this.state.title[12]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[13])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[13]))}
                            >{this.state.title[13]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[14])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[14]))}
                            >{this.state.title[14]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[15])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[15]))}
                            >{this.state.title[15]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[16])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[16]))}
                            >{this.state.title[16]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[17])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[17]))}
                            >{this.state.title[17]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[18])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[18]))}
                            >{this.state.title[18]}</Text>
                            <Text style={seperator}></Text>
                        </View> 
                        <View>
                            <Image
                            style={styles.imageUrl}
                            source={{ uri: String(this.state.urltoImage[19])}}
                            />
                            <Text style={newsline}
                            onPress={() =>Linking.openURL(String(this.state.url[19]))}
                            >{this.state.title[19]}</Text>
                            <Text style={seperator}></Text>
                        </View> 

                    </ScrollView>
                </PTRView>
            </View>  
        );
     };
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

export default Stocklines;