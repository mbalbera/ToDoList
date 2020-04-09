import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import CircleTransition from 'react-native-expanding-circle-transition' 

export default TaskRow = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.splitContainer}>
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>console.log('completed')}>
                 
                    {props.completed ? <Image style={styles.pics} source={require('../assets/blueCheck.png')}/> : <Text>O</Text> }
                    
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={ props.completed ? styles.completedText : styles.incompleteText}>
                            {props.text}
                        </Text>
                    </View>
                        {props.completed ? <View style={styles.completeLine}/> : <View style={styles.incompleteLine}>
                    </View>}
                </View>
                <View style={styles.timeContainer}>
                    <Text style={props.completed ? styles.completedText : styles.incompleteText}>
                        {props.time}
                    </Text>
                    <View>
                        {props.completed ? <View style={styles.completeLine}/> : <View style={styles.incompleteLine}/>}
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingVertical: '5%',
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
    },
    incompleteText:{
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
    textContainer:{
        width: '70%', 
        alignContent: 'center'
    },
    timeContainer:{
         width: '20%',
    },
    pics:{
        height: '50%',
        width: '50%',
        alignSelf: 'auto'
    },
    checkboxContainer:{
        width: '10%'
    }
    
});
