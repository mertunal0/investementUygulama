import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Firebase } from '../components/Firebase';

const TIME_DELAY = 2000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      Firebase.init();
      //firebase.auth().signOut();
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'BottomTabNavigator' : 'Welcome')
      })
    }, TIME_DELAY);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: "center",
          position: 'relative',
        }}
      >
        <Image style={{flex:1, width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={require('../assets/splash_screen.png')}></Image>
      </View>
    );
  }
}