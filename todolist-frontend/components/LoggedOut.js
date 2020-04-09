import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default LoggedOut = ()=>{
    return(
        <View style={styles.container}>
            <Text>Log In</Text>
            <TextInput  autoCapitalize={'words'} placeholder={'Name'} ></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
