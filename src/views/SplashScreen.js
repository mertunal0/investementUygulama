import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Firebase } from '../components/Firebase';

const TWO_SECONDS = 2000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      Firebase.init();
      //firebase.auth().signOut();
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Welcome')
      })
    }, TWO_SECONDS);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Splash</Text>
      </View>
    );
  }
}