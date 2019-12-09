import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Stocklines from '../../fetchdata/fetchcurrency';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = { 
      title: 'Feed',
    }

  render() {
    return (
      <View>
        <Stocklines/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS == 'ios' ? 21:0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center"
  },
});