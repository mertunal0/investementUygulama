import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
//import * as firebase from 'firebase'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import firebase from 'firebase'


export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    static navigationOptions = {
      title: 'Giriş Yap '
    }


  toHome() {
    if(this.state.email != "" && this.state.password != "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => console.log(error))
    }
  }
  toSignUp() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.subView_1}>
            <Input
              label= 'Email'
              placeholder = 'Elektronik posta adresinizi girin.'
              onChangeText = {email => this.setState({email})}
              value = {this.state.email}
            ></Input>
            <Input
              label= 'Şifre'
              placeholder = 'Şifrenizi girin.'
              secureTextEntry
              onChangeText = {password => this.setState({password})}
              value = {this.state.password}
            ></Input>
            <Button 
                textColor='white'
                backgroundColor='#00aeef'
                marginTop = {30} 
                onPress={this.toHome.bind(this)}>Giriş Yap
            </Button>
          </View>

          <View style={styles.subView_2}>
            <Text style={{marginRight: 10, marginLeft: -20, color: "#777"}}>Bir hesabın yok mu?</Text>
            <Text style={{fontWeight: "bold"}} onPress={this.toSignUp.bind(this)}>Kayıt Ol</Text>
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
    flex: 5,
    justifyContent: "center",
  },
  subView_2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'flex-end',
    marginBottom: 10
  }
});