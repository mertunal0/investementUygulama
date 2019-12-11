import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class ViewInApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = { 
      title: 'ViewInApp',
    }

    render() {
      return (
        <WebView
          source={{uri: this.props.navigation.getParam("url")}}
          style={{marginTop: 20}}
        />
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