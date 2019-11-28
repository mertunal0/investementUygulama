
import React from 'react';
import {View,Text} from 'react-native';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import YatirimYapScreen from './YatirimYapStack';

const BottomTabNavigator = createBottomTabNavigator({

  HomeScreen,
  YatirimYapScreen,
  ProfileScreen
  

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        let icontype
        if (routeName === 'HomeScreen') {
            iconName = `home`;
            icontype = 'antdesign';
        } else if (routeName === 'YatirimYapScreen') {
            iconName = `turkish-lira`;
            icontype = 'font-awesome';
        } else if (routeName === 'ProfileScreen') {
            iconName = `user`;
            icontype = 'antdesign';
        }
        return <IconComponent name={iconName} size={30} type={icontype} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
  }
},
);



export default BottomTabNavigator;