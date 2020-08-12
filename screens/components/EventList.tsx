import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { ListItem, Text, Card } from 'react-native-elements';


interface EventListProps {
    eventList: Event[]
}

class EventList extends React.Component<EventListProps, any>{

    renderEvent ({item}:{item :Event}){
        const date = item.date.split(" ");
        
        const dateElement = (
            <Card>
                <Text>
                    {`${date[0]} ${date[1]}`}
                </Text>
                <Text>
                    {date[2]}
                </Text>
            </Card>
        )
        return (
            <ListItem
                children
                leftElement={dateElement}
                title={item.name}
                subtitle={item.description}
                topDivider
                bottomDivider
                containerStyle={{margin: 2}}
            />
        )
    }

    render() {
        // TODO: Sort friends by streak length 
        let {eventList} = this.props;
        return (
                <FlatList data={eventList} 
                renderItem={this.renderEvent} 
                keyExtractor={item => item.id.toString()}
                />
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
