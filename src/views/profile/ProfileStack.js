import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from './Profile';



const NavigationProfile = createStackNavigator({
  Profile: {screen: Profile},
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
export default NavigationProfile;
