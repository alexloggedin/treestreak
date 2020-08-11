import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import { Text, Button, Divider } from 'react-native-elements';
import EventList from './components/EventList'


class EventScreen extends React.Component<any, any>{
    
    render() {
    return (
            <SafeAreaView>
                <Text h1>
                    Events
                </Text>
                <Button
                    icon={{
                        name:"add-circle", type:"material", color:'#f50', size: 20
                    }}
                    title="Add An Event"
                    raised
                />
                <Divider/>
                <EventList eventList={Events}/>


            </SafeAreaView>
        )
    }
}

export default EventScreen;

interface Event {
    name: string,
    description: string,
    location: string, //To be made into a location object
    date: string //To be made into a date object
    id:  number
}

const Events :Event[] = [
    {
       name: "Event #1",
       description: "Event Description that will be long but can be truncated.",
       location: "1234 Park Place",
       date: "Aug 31 1:30PM",
       id: 0
    },
    {
        name: "Event #2",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Sep 2 5:00PM",
        id: 1
     },
     {
        name: "Event #3",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Aug 16 9:00AM",
        id: 2
     }
]