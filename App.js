import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import HomeScreen from './src/screens/App/HomeScreen';

//Add Screens As they are created here
const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    // ex. Friends : FriendScreen,
  },
  {
    initialRouteName: 'Home', //Can change this during development
  },
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

//Navigation Flow for the app
//Initial Route is set to App for development purposes
export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
