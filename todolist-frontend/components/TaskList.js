import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';
import TaskRow from './TaskRow'
const DATA = [
    { text: 'walk dog', completed: true, time: '12:00 pm', id: '1' },
    { text: 'get milk', completed: false, time: '1:00 am', id: '2' },
    { text: 'call mom', completed: false, time: '2:00 am', id: '3' },
    { text: 'take out trash', completed: false, time: '3:00 am', id: '4' },
    { text: 'feed fish', completed: false, time: '4:30 am', id: '5' },
    { text: 'take medicine', completed: false, time: '5:00 am', id: '6' },
    { text: 'wash dishes', completed: false, time: '6:00 am', id: '7' },
    { text: 'wash clothes', completed: false, time: '7:00 am', id: '8' },
    { text: 'move clothes to drier', completed: false, time: '8:00 am', id: '9' },
    { text: 'medicine pt 2', completed: false, time: '9:00 am', id: '10' },
    { text: 'fold clothes', completed: false, time: '10:00 am', id: '11' },
    { text: 'bed time', completed: false, time: '12:02 am', id: '12' }
]
export default TaskList = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{marginHorizontal:'10%'}}>
                    <Text style={{ fontSize: 20, color: 'rgb(109,134,229)', fontWeight: 'bold'}}>
                        {DATA.length === 1 ? '1 task' : `${DATA.length} tasks`}
                    </Text>
                    <SafeAreaView style={styles.tasksContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <TaskRow text={item.text} completed={item.completed} time={item.time} />}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{flex: 1, flexDirection: 'column', height: '100%', width: '100%'}}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )
}
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
        marginTop: '15%',
    },

    splitContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },
});
