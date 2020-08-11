import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { Text, Icon, ListItem, Divider } from 'react-native-elements';

interface FriendListProps {
    friendList: Friend[]
}


class FriendList extends React.Component<FriendListProps, any>{

    renderFriend ({item}:{item :Friend}){

        let streakCounter;
        if (item.streak > 0){
            streakCounter = (
              <View>
                  <Text>{item.streak}</Text>
                  <Icon
                    name="whatshot"
                    type="material"
                    color="red"
                  />
              </View>
            )
        }
        return (
            <ListItem style={{flexGrow: 1, height: "auto"}}
                leftAvatar={{source: {uri: item.avatar_url}}}
                title={item.username}
                rightElement={streakCounter}
                onPress={() => console.log(item.username)}
                bottomDivider
                topDivider
                children
            />
        )
    }

    render() {
        // TODO: Sort friends by streak length 
        let list = this.props.friendList;
        list.sort( (a,b) =>( b.streak - a.streak ))

        return (
            <View>
                <FlatList 
                nestedScrollEnabled={true}  
                scrollToOverflowEnabled={true}
                data={list} 
                renderItem={this.renderFriend} 
                keyExtractor={item => item.id.toString()}/>
            </View>
        )
    }
}

export default FriendList;

const styles = StyleSheet.create({

})

// TODO: Move this to the redux further in development

interface Friend {
    username: string,
    streak: number,
    avatar_url: string,
    id: number
}