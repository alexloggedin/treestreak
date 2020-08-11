import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { ListItem, Text } from 'react-native-elements';


interface EventListProps {
    eventList: Event[]
}

class EventList extends React.Component<EventListProps, any>{

    renderEvent ({item}:{item :Event}){
        const date = item.date.split(" ");
        
        const dateElement = (
            <View>
                <Text>
                    {`${date[0]} ${date[1]}`}
                </Text>
                <Text>
                    {date[2]}
                </Text>
            </View>
        )
        return (
            <ListItem
                children
                leftElement={dateElement}
                title={item.description}
                subtitle={item.description}
                topDivider
                bottomDivider
            />
        )
    }

    render() {
        // TODO: Sort friends by streak length 
        let {eventList} = this.props;
        return (
            <View>
                <FlatList data={eventList} renderItem={this.renderEvent} keyExtractor={item => item.id.toString()}/>
            </View>
        )
    }
}

export default EventList;

const styles = StyleSheet.create({

})

// TODO: Move this to the redux further in development

interface Event {
    name: string,
    description: string,
    location: string, //To be made into a location object
    date: string //To be made into a date object
    id:  number
}
