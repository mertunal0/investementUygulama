import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';



const NavigationHome = createStackNavigator({
    Home: {screen: Home},
},
{
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    },
  },
}
);
export default NavigationHome;
