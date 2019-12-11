import React, {Component} from 'react';
import {
  Platform,
    StyleSheet,
    View,
    Text,
    Image,
    Linking,
    ScrollView
} from 'react-native';


import PTRView from 'react-native-pull-to-refresh';

import CoinPriceChart from "../../components/coinPriceChart";
import News from "../../components/news";


export default class Home extends Component {
    constructor(props) {
        super(props);
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

    static navigationOptions = { 
      title: 'Feed',
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <View style={{flexDirection: 'row'}}>
            <CoinPriceChart coinSymbol={this.state.dolar[0]} coinPrice={this.state.dolar[1]}/>
            <CoinPriceChart coinSymbol={this.state.euro[0]} coinPrice={this.state.euro[1]}/>
            <CoinPriceChart coinSymbol={this.state.pound[0]} coinPrice={this.state.pound[1]}/>
            <CoinPriceChart coinSymbol={this.state.yen[0]} coinPrice={this.state.yen[1]}/>
          </View>
          <PTRView onRefresh={this._refresh} >
              <ScrollView>
                  <News urltoImage={String(this.state.urltoImage[0])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[0])})} >{this.state.title[0]}</Text>
                  <News urltoImage={String(this.state.urltoImage[1])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[1])})} >{this.state.title[1]}</Text>
                  <News urltoImage={String(this.state.urltoImage[2])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[2])})} >{this.state.title[2]}</Text>
                  <News urltoImage={String(this.state.urltoImage[3])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[3])})} >{this.state.title[3]}</Text>
                  <News urltoImage={String(this.state.urltoImage[4])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[4])})} >{this.state.title[4]}</Text>
                  <News urltoImage={String(this.state.urltoImage[5])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[5])})} >{this.state.title[5]}</Text>
                  <News urltoImage={String(this.state.urltoImage[6])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[6])})} >{this.state.title[6]}</Text>
                  <News urltoImage={String(this.state.urltoImage[7])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[7])})} >{this.state.title[7]}</Text>
                  <News urltoImage={String(this.state.urltoImage[8])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[8])})} >{this.state.title[8]}</Text>
                  <News urltoImage={String(this.state.urltoImage[9])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[9])})} >{this.state.title[9]}</Text>
                  <News urltoImage={String(this.state.urltoImage[10])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[10])})} >{this.state.title[10]}</Text>
                  <News urltoImage={String(this.state.urltoImage[11])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[11])})} >{this.state.title[11]}</Text>
                  <News urltoImage={String(this.state.urltoImage[12])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[12])})} >{this.state.title[12]}</Text>
                  <News urltoImage={String(this.state.urltoImage[13])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[13])})} >{this.state.title[13]}</Text>
                  <News urltoImage={String(this.state.urltoImage[14])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[14])})} >{this.state.title[14]}</Text>
                  <News urltoImage={String(this.state.urltoImage[15])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[15])})} >{this.state.title[15]}</Text>
                  <News urltoImage={String(this.state.urltoImage[16])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[16])})} >{this.state.title[16]}</Text>
                  <News urltoImage={String(this.state.urltoImage[17])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[17])})} >{this.state.title[17]}</Text>
                  <News urltoImage={String(this.state.urltoImage[18])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[18])})} >{this.state.title[18]}</Text>
                  <News urltoImage={String(this.state.urltoImage[19])}
                  onClick ={()=> navigate("WebView")}/>
                  <Text style ={coinPrice} onPress={() => navigate("ViewInApp",{url :String(this.state.url[19])})} >{this.state.title[19]}</Text>

              </ScrollView>
          </PTRView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  coinPrice : {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
    fontSize:20,
}
});

const { 
    coinPrice,
} = styles;

