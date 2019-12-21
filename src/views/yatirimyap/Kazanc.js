import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import {Button} from '../../components/Button'


export default class Kazanc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          miktarUser: this.props.navigation.getParam("miktarUser"),
          kazancOrani: null
        }
    }

    static navigationOptions = { 
      title: 'Kazanç',
    }

    toRisk() {
      if (this.state.kazancOrani != null && this.state.kazancOrani > 0 && this.state.kazancOrani <= 100) {
        this.props.navigation.navigate('Risk', {miktarUser: this.state.miktarUser, kazancOraniUser: this.state.kazancOrani}); 
      }
      else{
        alert("Lütfen geçerli bir oran giriniz.");
      }
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.infoText}>
            (2/3) Şimdi yatırımınızın sonunda bütçenizin yüzde kaçı kadar kar etmek istediğinizi belirleyelim.
          </Text>
        </View>
        <View style={{justifyContent: "center", flex: 10}}>
          <Text style={styles.numberinputLabel}>Kazanç Oranı</Text>
          <View style={styles.subView_1}>
            <Text style={styles.prefix}>%</Text>
            <TextInput
              style={styles.numberinput}
              label= 'Bütçe'
              placeholder="Oran"
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
              onChangeText={kazancOrani => this.setState({ kazancOrani })}
            />
          </View>
          <Button 
              textColor='black'
              backgroundColor='white'
              borderColor='black'
              borderWidth={1}
              marginTop={20}
              onPress={this.toRisk.bind(this)}>İleri
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
    width: '15%'
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