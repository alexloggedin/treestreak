import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class FriendScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'blue'}}>
        <Text>Friends</Text>
        <Text>Search</Text>
      </View>
    );
  }
}

export default FriendScreen;
