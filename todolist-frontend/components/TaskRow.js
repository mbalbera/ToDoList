import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default TaskRow = (props) => {
    console.log('TR prop id: ', props)
    return (
        <View style={styles.container} >
            <View style={styles.splitContainer}>
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>props.completeTask(props.id)}>
                    {props.completed ? <Image style={styles.pics} source={require('../assets/blueCheck.png')}/> : <Text style={styles.completedText}>O</Text> }
                    
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <View>
                        <Text ellipsizeMode={'tail'} numberOfLines={1} onLongPress={()=>props.deleteTask(props.id)} style={ props.completed ? styles.completedText : styles.incompleteText}>
                            {props.text}
                        </Text>
                    </View>
                        {props.completed ? <View style={styles.completeTextUnderline}/> : <View style={styles.incompleteTextUnderline}>
                    </View>}
                </View>
                <View style={styles.timeContainer}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1} style={props.completed ? styles.completedTimeText : styles.incompleteTimeText}>
                        {props.time}
                    </Text>
                    <View>
                        {props.completed ? <View style={styles.completeLineTime}/> : <View style={styles.incompleteLineTime}/>}
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingVertical: '9%',
        width: '100%',
    },

    splitContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    completedText:{
        color: 'rgb(213,213,213)',
    },
    completedLineText:{
        // textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        color: 'rgb(213,213,213)',
        zIndex: 0,
        fontSize: 14
    },
    incompleteText:{
        // textDecorationLine: 'underline', 
        textDecorationStyle: 'solid',
        zIndex: 0,
        fontSize: 14
    },
    completedTimeText: {
        // textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        color: 'rgb(213,213,213)',
        zIndex: 0,
        fontSize: 10,
    },
    incompleteTimeText: {
        // textDecorationLine: 'underline', 
        textDecorationStyle: 'solid',
        zIndex: 0,

    },
      incompleteTimeText: {
        // textDecorationLine: 'underline', 
        textDecorationStyle: 'solid',
        zIndex: 0,
        fontSize: 10

    },
    incompleteTextUnderline:{
        borderBottomColor: 'rgb(213,213,213)',
        borderBottomWidth: 1,
        zIndex: 5
    },
    completeTextUnderline:{
        borderBottomColor: 'rgb(213,213,213)',
        borderBottomWidth: 1,
        zIndex: 5,
        margin: -8
    },
    completeLineTime:{
        borderBottomColor: 'rgb(213,213,213)',
        borderBottomWidth: 1,
        zIndex: 5,
        margin: -3
    },
    incompleteLineTime: {
        borderBottomColor: 'rgb(213,213,213)',
        borderBottomWidth: 1,
        zIndex: 5,
        marginTop: 5
    },
    textContainer:{
        width: '70%', 
        alignContent: 'center'
    },
    timeContainer:{
         width: '20%',
    },
    pics:{
        height: 20,
        width: 20,
        zIndex:6
    },
    checkboxContainer:{
        width: '10%'
    }
    
});
