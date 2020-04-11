import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

class LoggedOut extends React.Component{
    state = {
        name: ""
    }
    setName = (event) => {
        this.setState({ name: event.nativeEvent.text})
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{marginBottom:100}}>
                    <Text style={{fontSize: 26}}>To Do List</Text>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <Text style={{ fontSize: 20 }}>Log In</Text>
                </View>
                <View style={{ marginBottom: 25, backgroundColor: 'rgb(214,216,221)', paddingVertical: 6, paddingHorizontal: 40, borderRadius:12 }}>
                    <TextInput  autoCapitalize={'words'} placeholder={'Name'} onChange={(e)=>this.setName(e)}></TextInput>
                </View >
                <View style={{ marginBottom: 300 }}>
                    <TouchableOpacity style={{ fontSize: 26, backgroundColor:'rgb(109, 134, 229)', padding: 10, borderRadius: 10 }}onPress={()=>this.props.login(this.state.name)}>
                        <Text style={{color:'rgb(17,17,17)'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoggedOut
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
