/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Swiper from 'react-native-swiper'
import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';
import EventScreen from './screens/EventScreen';

import {ThemeProvider} from 'react-native-elements'


declare const global: { HermesInternal: null | {} };

class App extends React.Component<any, any>{
  render() {
    return (
      <Swiper
      index={1} 
      loop={false} 
      onIndexChanged={ (i) => {
        console.log(`Swiped to ${i}`)
        Keyboard.dismiss()
        }}
      >

        <FriendScreen />
        <HomeScreen />
        <EventScreen />

      </Swiper>
    )
  }
}

export default App;
