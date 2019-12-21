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



export default class Miktar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paramiktari: null,
        }
    }

    static navigationOptions = { 
      title: 'Yatırım Ara',
    }

    toKazanc() {
      if (this.state.paramiktari != null && this.state.paramiktari > 0) {
        this.props.navigation.navigate('Kazanc', {miktarUser: this.state.paramiktari}); 
      }
      else{
        alert("Lütfen geçerli bir miktar giriniz.");
      }
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.infoText}>
              Size uygun yatırım fırsatını yakalamak için RumpeIn App sizden 3 bilgi isteyecek.
              {"\n\n"}
              (1/3) İlk olarak ne kadar bütçeyle yatırım yapacağınızı belirleyelim.
            </Text>
          </View>
          <View style={{justifyContent: "center", flex: 10}}>
            <Text style={styles.numberinputLabel}>Bütçe</Text>
            <View style={styles.subView_1}>
              <Text style={styles.prefix}>₺</Text>
              <TextInput
                style={styles.numberinput}
                label= 'Bütçe'
                placeholder="Yatırım için ayıracağınız miktarı girin."
                keyboardType="number-pad"
                underlineColorAndroid="transparent"
                onChangeText={paramiktari => this.setState({ paramiktari })}
              />
            </View>
            <Button 
                  textColor='black'
                  backgroundColor='white'
                  borderColor='black'
                  borderWidth={1}
                  marginTop={20}
                  onPress={this.toKazanc.bind(this)}>İleri
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
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    marginTop: 2,
    marginLeft: 4,
    color: '#666',
    fontSize: 17,
    fontWeight: "normal",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    width: '88%'
  },
  prefix: {
    borderColor: "#aaa",
    borderWidth: 1,
    paddingRight: 7,
    paddingLeft: 10,
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});