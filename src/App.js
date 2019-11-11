/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './views/Home';
import Welcome from './views/Welcome';
import Signin from './views/registration/Signin';
import Signup from './views/registration/Signup';
import SplashScreen from './views/SplashScreen';



const NavigationApp = createStackNavigator({
  SplashScreen: {screen: SplashScreen},
  Welcome: {screen: Welcome},
  Signin: {screen: Signin},
  Signup: {screen: Signup},
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
const App = createAppContainer(NavigationApp);
export default App;
