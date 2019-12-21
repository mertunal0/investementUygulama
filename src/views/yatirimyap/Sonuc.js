import React, {Component} from 'react';
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';



export default class ViewInApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          miktarArac: this.props.navigation.getParam("miktarUser"),
          results: this.props.navigation.getParam("results"),
          kalanAraclar: this.props.navigation.getParam("kalanAraclar"),
          
        }
    }

    static navigationOptions = { 
      title: 'Sonuç',
      headerLeft: null
    }

    toHome() {
      this.props.navigation.navigate('Miktar');
    }


    render() {
      var sonucRecord = []
      for(let i = 0; i < this.state.kalanAraclar.length; i++) {
        sonucRecord.push(
          <View style={{flexDirection: "row", paddingHorizontal: 4, marginVertical: 2}}>
            <View style={{flexDirection: "column", flex:1}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{fontSize: 17, color: "#3dd3fc", fontWeight: "bold"}}>{this.state.kalanAraclar[i].isim}</Text>
              </View>
            </View>
            <View style={{flexDirection: "column", flex:1}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{fontSize: 16}}>₺{(this.state.results[i]*this.state.miktarArac).toFixed(2) }</Text>
              </View>
            </View>
            <View style={{flexDirection: "column", flex:1}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{fontSize: 16}}>({(this.state.results[i]*100).toFixed(2)}%)</Text>
              </View>
            </View>
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <Text style={styles.infoText}><Text style={{color: "#3dd3fc"}}>RumpeIn</Text>, seçimlerinizin filtresinde, önümüzdeki 30 gün için şu tercihlerin faydalı olacağını düşünüyor!</Text>
          <View style={{paddingHorizontal: 4, borderColor: "#444", borderWidth: 1, paddingVertical: 24, flex:3}}>
            <View style={{flexDirection: "row", paddingHorizontal: 4, marginBottom: 8}}>
              <View style={{flexDirection: "column", paddingHorizontal: 6, flex: 1}}>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 17, fontWeight: "bold"}}>Araç</Text>
                  </View>
              </View>
              <View style={{flexDirection: "column", paddingHorizontal: 6, flex: 1}}>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 17, fontWeight: "bold"}}>Miktar</Text>
                  </View>
              </View>
              <View style={{flexDirection: "column", paddingHorizontal: 6, flex: 1}}>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 17, fontWeight: "bold"}}>Oran</Text>
                  </View>
              </View>
            </View>
            {sonucRecord}
          </View>
          <View style={{flex: 4}}>
            <Button 
            textColor='white'
            backgroundColor='#00aeef'
            marginTop={40}
            onPress={this.toHome.bind(this)}>Bitti
          </Button>
          </View>
          
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS == 'ios' ? 21:0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  infoText: {
    flex: 3,
    marginTop: 20,
    color: "#777",
    fontSize: 17,
  },
});