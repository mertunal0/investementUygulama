import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = { 
      title: 'Profil',
      headerRight: () => (
        <Icon name={"setting"} size={20} type={"antdesign"} color={"#000"} />
      ),
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <Text>Profile screen</Text>
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