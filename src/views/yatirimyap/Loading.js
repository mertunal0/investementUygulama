import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Picker,
  Text,
} from 'react-native';
import {Button} from '../../components/Button'


export default class Risk extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userMiktar: null,
          userKazanc: null,
          userRisk: null,

          enflasyon: null,
          yatirimAraclari: [
              {isim: "GAU", uuid: "348-sdlkj-23egf", ortalamaGetiri: 13*365, standartSapma: 5.23423543*Math.sqrt(365)},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 10*365, standartSapma: 2.35694343*Math.sqrt(365)}
          ],
          yatirimAraclariEliminated: []
        }
    }

    eliminationKazanc() {
        for(i = 0; i<this.state.yatirimAraclari.length(); i++) {
            if (this.state.yatirimAraclari[i].ortalamaGetiri > this.state.enflasyon + this.state.userRisk / 1000) {
                this.state.yatirimAraclariEliminated.push(this.state.yatirimAraclari[i]);
            }
        }

        if(this.state.yatirimAraclariEliminated.length() < 3) {
            this.state.yatirimAraclari.sort(/* standart sapmaya göre ayarla */);
            this.state.yatirimAraclariEliminated = this.state.yatirimAraclari.slice(35,39);
        }
        else if(this.state.yatirimAraclariEliminated.length() < 6) {
            return;
        }
        else if(this.state.yatirimAraclariEliminated.length() < 6 + this.state.userRisk) {
            const kesmeNoktasi = this.state.yatirimAraclariEliminated.length() * this.state.userRisk / 10
            if (this.state.yatirimAraclariEliminated.length() - kesmeNoktasi < 3.5) {
                this.state.yatirimAraclariEliminated = this.state.yatirimAraclariEliminated.slice(this.state.yatirimAraclariEliminated.length()-5, this.state.yatirimAraclariEliminated.length()-1)
            }
            else{
                kesmeNoktasi = Math.floor(kesmeNoktasi);
                this.state.yatirimAraclariEliminated = this.state.yatirimAraclariEliminated.slice(kesmeNoktasi - 1, kesmeNoktasi + 3)
            }
        }
        else{
            this.state.yatirimAraclariEliminated.sort(/* standartSapmaya göre ayarla */);
            this.state.yatirimAraclariEliminated = this.state.yatirimAraclariEliminated.slice(Math.abs(this.state.userRisk-1) , Math.abs(this.state.userRisk+3));
        }
    }

    nlpOptimisation() {
        //burada gams'tan ya da mathlabten bi şeyler gelecek
        const results = null;

        return results;
    }

    toResults() {
        //results sayfasına navigate olacağız.
    }


    static navigationOptions = { 
      title: 'Loading',
    }


  render() {
    return (
      <View style={styles.container}>
          <Text>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS == 'ios' ? 21:0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center"
  },
});