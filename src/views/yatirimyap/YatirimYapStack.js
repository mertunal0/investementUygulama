import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Risk from './Risk';
import Kazanc from './Kazanc';
import Miktar from './Miktar';
import Home from '../home/HomeStack';
import Loading from './Loading';
import Sonuc from './Sonuc'



const NavigationYatirimYap = createStackNavigator({
  Miktar: {screen: Miktar},
  Kazanc: {screen: Kazanc},
  Risk: {screen: Risk},
  Home: {screen: Home},
  Loading: {screen: Loading},
  Sonuc: {screen: Sonuc}
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
export default NavigationYatirimYap;
