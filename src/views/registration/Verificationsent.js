import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import firebase from 'firebase'


export default class Verificationsent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {},
    }
}

    componentDidMount() {
      this.state.user = firebase.auth().currentUser;
      this.state.user.sendEmailVerification().then(function() {
         console.log("verification sent")         
      }
      ).catch(
          error => {
              alert(error);
          }
      )
    }

  toHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Eposta hesabınzı kontrol ediniz.
          </Text>
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