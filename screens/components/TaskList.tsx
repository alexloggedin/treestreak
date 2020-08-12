import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import { Text, Icon, ListItem, Divider } from 'react-native-elements';

interface TaskListProps {
    tasks: Task[]
}


class TaskList extends React.Component<TaskListProps, any>{

    render() {
        // TODO: Sort and place finished tasks below unfinished ones 
        let {tasks} = this.props;
        return (
                <ScrollView>
                {tasks.map((task, i) => {
                        return (
                            <ListItem
                                key={i}
                                title={task.name}
                                rightIcon={{name:"whatshot", type:"material", color:"#f50"}}
                                bottomDivider
                                children
                                onPress={() => console.log(task.name)}
                            />
                        )
                    })
                }
                </ScrollView>
        )
    }
}

export default TaskList;

const styles = StyleSheet.create({
    listContainer:{
        flex: 1
    }
})

// TODO: Move this to the redux further in development

interface Task {
    name: string,
    completed: boolean
}