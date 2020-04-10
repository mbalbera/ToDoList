import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default TaskRow = (props) => {
    // console.log('TR props: ', props)
    return (
        <View style={styles.container} >
            <View style={styles.splitContainer}>
                <TouchableOpacity style={styles.checkboxContainer} onPress={(props)=>props.completeTask(props)}>
                    {props.completed ? <Image style={styles.pics} source={require('../assets/blueCheck.png')}/> : <Text style={styles.completedText}>O</Text> }
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <View>
                        <Text ellipsizeMode={'tail'} numberOfLines={1} style={ props.completed ? styles.completedText : styles.incompleteText}>
                            {props.text}
                        </Text>
                    </View>
                        {props.completed ? <View style={styles.completeLine}/> : <View style={styles.incompleteLine}>
                    </View>}
                </View>
                <View style={styles.timeContainer}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1} style={props.completed ? styles.completedTimeText : styles.incompleteTimeText}>
                        {props.time}
                    </Text>
                    <View>
                        {props.completed ? <View style={styles.completeLineTime}/> : <View style={styles.incompleteLine}/>}
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
        fontSize: 10
    },
    incompleteTimeText: {
        // textDecorationLine: 'underline', 
        textDecorationStyle: 'solid',
        zIndex: 0,

    },
    incompleteLine:{
        borderBottomColor: 'rgb(213,213,213)',
        borderBottomWidth: 1,
        zIndex: 5
    },
    completeLine:{
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
