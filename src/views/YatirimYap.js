import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = { 
      title: 'Yatırım Yap',
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <Text onPress={() => navigate('Signin')}>Yatırım Yap screen</Text>
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