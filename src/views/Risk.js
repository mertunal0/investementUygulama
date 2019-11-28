import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Picker,
  Text,
} from 'react-native';
import {Button} from '../components/Button'


export default class Risk extends Component {
    constructor(props) {
        super(props);
        this.state = {
          riskTercihi: null
        }
    }

    static navigationOptions = { 
      title: 'Risk',
    }

    toRisk() {
      if (this.state.riskTercihi != null && this.state.riskTercihi > 0 && this.state.riskTercihi <= 10) {
        this.props.navigation.navigate('Home'); 
      }
      else{
        alert("Lütfen bir tercih yapınız.");
      }
    }

    toRiskTercihiYonlendiricisi() {
      alert("burada yönlendirici açılacak.")
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.infoText}>
            (3/3) Son olarak yatırımınızda ne kadar riski göze alabileceğinizi belirleyelim.
            {"\n\n"} 
            Burada 1'den 10'a kadar bir risk puanı seçeceksiniz. Düşük puan, az karlı ve başarısız olma ihtimali 
            az olan yatırımlar; yüksek puan, çok karlı ve başarısız olma ihtimali yüksek olan yatırımlar demektir. 
            Risk tercihi seçiminde destek almak için <Text onPress={this.toRiskTercihiYonlendiricisi.bind(this)} style={{color: "#00AEE7"}}>tıklayın</Text>.
          </Text>
        </View>
        <View style={{justifyContent: "center", flex: 10}}>
          <Text style={styles.numberinputLabel}>Risk Tercihi</Text>
          <View style={styles.subView_1}>
            <Picker
              selectedValue={this.state.riskTercihi}
              style={styles.numberinput}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({riskTercihi: itemValue})
              }>
              <Picker.Item label="Seçilmedi" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>
          </View>
          <Button 
            textColor='white'
            backgroundColor='#00aeef'
            marginTop={20}
            onPress={this.toRisk.bind(this)}>Yatırım Ara
          </Button>
        </View>
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
  subView_1: {
    flexDirection: "row"
  }, 
  infoText: {
    marginTop: 20,
    color: "#777",
    fontSize: 15,
  },
  numberinputLabel: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 18,
    fontWeight: "bold",
    width: '100%'
  },
  numberinput: {
    marginTop: 5,
    color: '#666',
    fontSize: 17,
    fontWeight: "normal",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    width: '40%'
  },
});