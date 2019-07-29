import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';

class App extends React.Component {
    render() {
        return(
            <Swiper loop={false} showsPagination={false} index={1}>
                    <FriendScreen />
                    <HomeScreen />
            </Swiper>
        )
    }
}

export default App;
