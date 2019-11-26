import React, {Component} from 'react';
import * as firebase from "firebase";
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            againpassword: '',
        }
    }

    static navigationOptions = {
      title: 'Kayıt Ol'
    }

  toSignin() {
    this.props.navigation.navigate('Signin');
  }
  toVerificationSent() {
    if(this.state.password == this.state.againpassword && this.state.name != "" && this.state.password.length > 6 && this.state.email != "" ) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('BottomTabNavigator'))
      .catch(error => console.log(error))
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.subView_1}>
            <Input
              label= 'Ad Soyad'
              placeholder = 'Adınız ve Soyadınız.'
              onChangeText = {name => this.setState({name})}
              value = {this.state.name}
            ></Input>
            <Input
              label= 'Email'
              placeholder = 'Elektronik posta adresiniz.'
              onChangeText = {email => this.setState({email})}
              value = {this.state.email}
            ></Input>
            <Input
              label= 'Şifre'
              placeholder = 'Şifreniz.'
              secureTextEntry
              onChangeText = {password => this.setState({password})}
              value = {this.state.password}
            ></Input>
            <Input
              placeholder = 'Şifre tekrarı.'
              secureTextEntry
              onChangeText = {againpassword => this.setState({againpassword})}
              value = {this.state.againpassword}
            ></Input>
            <Button 
                textColor='white'
                backgroundColor='#00aeef' 
                marginTop = {30}
                onPress={this.toVerificationSent.bind(this)}>Gönder
            </Button>
          </View>

          <View style={styles.subView_2}>
              <Text style={{marginRight: 10, marginLeft: -20, color: "#777"}}>Zaten hesabın var mı?</Text>
              <Text style={{fontWeight: "bold"}} onPress={this.toSignin.bind(this)}>Giriş Yap</Text>
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
    flex: 8,
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