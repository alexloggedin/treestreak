import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import { Text, Divider } from 'react-native-elements';

import StreakCounter from './components/StreakCounter';
import TaskList from './components/TaskList'

class HomeScreen extends React.Component<any, any>{

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text h1>
                    Home
                </Text>
                <View style={styles.streak}>
                    <StreakCounter counter={0} totalScore={5000} currentStreak={30}/>    
                </View>

                <View>
                    <TaskList tasks={taskList}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default HomeScreen;

interface Task {
    name: string,
    completed: boolean
}

const taskList :Task[] = [
    {
        name: "Task #1",
        completed: false 
    },
    {
        name: "Task #2",
        completed: false
    },
    {
        name: "Task #3",
        completed: false
    },
    {
        name: "Task #4",
        completed: false
    },
    {
        name: "Task #5",
        completed: false
    }
]

const styles = StyleSheet.create({
  container:{
      width: '95%',
      alignSelf: "center"
  },

  streak:{
      marginBottom: 10
  },

})