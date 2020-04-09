import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CircleTransition from 'react-native-expanding-circle-transition' 

export default TaskRow = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.splitContainer}>
                <TouchableOpacity style={{width:'10%'}} onPress={()=>console.log('completed')}>
                    {/* <Text>
                        {props.completed? 'x' : 'o'}
                    </Text> */}
                    <CircleTransition
                        color='rgb(213,213,213)'
                        expand
                        duration={500}
                    />
                </TouchableOpacity>
                <View style={{width:'70%',alignContent:'center'}}>
                    <View>
                        <Text style={ props.completed ? styles.complete : styles.incomplete}>
                            {props.text}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'rgb(213,213,213)',
                            borderBottomWidth: 1,
                        }}>
                    </View>
                </View>
                <View style={{width:'20%'}}>
                    <Text>
                        {props.time}
                    </Text>
                <View
                    style={{
                        borderBottomColor: 'rgb(213,213,213)',
                        borderBottomWidth: 1,
                    }}>
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
    complete:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    incomplete:{
        // textDecorationLine: 'underline', 
        textDecorationStyle: 'solid'

    }
});
