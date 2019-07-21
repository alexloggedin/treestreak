import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';

const MainNav = createStackNavigator(
    {
    Home: HomeScreen,
    Friends: FriendScreen,
    },
    {
    initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(MainNav);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
