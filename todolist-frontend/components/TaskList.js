import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';
import TaskRow from './TaskRow'
import { render } from 'react-dom';

const TaskList =(props)=> {

    return (
        <View style={styles.container}>
            <View>
                <View style={{marginHorizontal:'10%',}}>
                    <Text style={{ fontSize: 20, color: 'rgb(109,134,229)', fontWeight: 'bold'}}>
                        {props.tasks.length === 1 ? '1 task' : `${props.tasks.length} tasks`}
                    </Text>
                    <SafeAreaView style={styles.tasksContainer}>
                        <FlatList
                            data={props.tasks}
                            renderItem={({ item }) => <TaskRow completeTask={props.completeTask} text={item.text} completed={item.completed} time={item.time} />}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ flex: 1, flexDirection: 'column', height: '100%', width: '100%' }}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )
}
export default TaskList
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // paddingTop: '15%',
    }, 
    
    tasksContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: '7%',
    },

    splitContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },
});
