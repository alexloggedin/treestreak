import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
            <Button
              title="Friendlist"
              onPress={() => this.props.navigation.navigate('Friends')}
            />
      </View>
    );
  }
}


export default HomeScreen;
