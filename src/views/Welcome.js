/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input} from '../components/Input'
import {Button} from '../components/Button'
import {Firebase} from '../components/Firebase'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  static navigationOptions = { 
    header: null
  }

  toSignUp() {
    this.props.navigation.navigate('Signup');
  }

  toSignIn() {
    this.props.navigation.navigate('Signin');
  }

  render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
          <Text style={{alignSelf: "center"}}>Welcome</Text>

          <Button 
                textColor='white'
                backgroundColor='#00aeef'
                borderColor='#174cff'
                borderWidth={1}
                marginTop = {80} 
                onPress={this.toSignUp.bind(this)}>Kayıt Ol
            </Button>
            <Button 
                textColor='black'
                backgroundColor='white'
                borderColor='black'
                borderWidth={1}
                marginTop={10}
                onPress={this.toSignIn.bind(this)}>Giriş Yap
            </Button>
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

