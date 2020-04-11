import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Switch, KeyboardAvoidingView} from 'react-native';

class NewTaskModal extends React.Component {
    state = {
        text: '',
        hours:'',
        minutes:'',
        AM: false,
        toggle: true
    }

    handleText = (event)=>{
        this.setState({ text: event.nativeEvent.text })
    }

    handleHours = (event) => {
        this.setState({ hours: event.nativeEvent.text })
    }

    handleMinutes = (event) => {
        this.setState({ minutes: event.nativeEvent.text })
    }

    switchHandler=()=>{
        const time = !this.state.AM
        this.setState({AM:time})
    }

    createTask=()=>{
        fetch("http://localhost:3000/api/v1/tasks/new", {
            method: 'POST',
            body: JSON.stringify({
                task: {
                    user_id: this.props.user.id,
                    completed: false,
                    time: `${this.state.hours}:${this.state.minutes} ${this.state.AM ? 'PM' : 'AM'}`,
                    text: this.state.text
                }
            }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data=>this.props.parseData(data, 'add'))
            .then(this.props.hideModal())
    }

    render() {

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                transparent={true}
                onRequestClose={() => { Alert.alert('Modal has been closed.') }}
            >
                <View style={{paddingTop: 200}}>
                    <View style={{ backgroundColor: 'rgb(213,213,213)', paddingTop: 15}}>
                        <Text style={{textAlign:'center', fontWeight: "bold"}}>
                            New Task
                        </Text>
                        <View style={{ marginBottom: 25, backgroundColor: 'rgb(214,216,221)', paddingTop: 30, paddingHorizontal: 90, borderRadius: 12 }}>
                            <TextInput placeholder={'What do you have to do?'} onChange={(e) => this.handleText(e)}></TextInput>
                        </View >
                        <View style={{ marginBottom: 25, backgroundColor: 'rgb(214,216,221)', paddingHorizontal: 40, borderRadius: 12, flexDirection:'row', justifyContent: 'space-around' }}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={{ zIndex: 5 }} placeholder={'Hour'}  onChange={(e) => this.handleHours(e)}></TextInput> 
                                <View style={{marginTop:14, zIndex: -1}}>
                                    <Text>  :  </Text>
                                </View>
                                 <TextInput style={{zIndex:5}} placeholder={'Minutes'} onChange={(e) => this.handleMinutes(e)}></TextInput>
                            </View>
                            <View>
                                <Switch onChange={()=>this.switchHandler()} value={this.state.AM} trackColor={{ false: 'rgb(254,214,76)', true: 'rgb(57,96,128)' }}></Switch>
                                <Text style={{fontWeight: 'bold'}}>{this.state.AM?'        PM':'AM'}</Text>
                            </View>
                        </View >
                        <View style={{ marginVertical: 50 }}>
                            <TouchableOpacity style={{ fontSize: 26, backgroundColor: 'rgb(109, 134, 229)', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 5 }} onPress = {()=>this.createTask()}>
                                <Text style={{ textAlign: 'center',color: 'rgb(17,17,17)', fontWeight: 'bold' }}>Add Event</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 300 }}>
                            <TouchableOpacity style={{ fontSize: 26, backgroundColor: 'rgb(231, 88, 83)', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 5 }} onPress = {()=>this.props.hideModal()}>
                                <Text style={{ textAlign: 'center',color: 'rgb(17,17,17)', fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}


export default NewTaskModal

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    headingText: {
        height: 50,
        backgroundColor: 'lightgrey',
        width: '20%',
        textAlign: 'center'
    },

    mainContainer: {
        top: 110,
        position: "absolute",
        alignSelf: 'center',
    },

    pic: {
        zIndex: 99,
        alignContent: 'center'

    },

    slider: {
        width: 200,
        height: 40,
        alignContent: 'center'

    },
    midContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
    },

    gameContainer: {

        left: '50%',
        top: '130%',
        zIndex: 88
    },

    splitContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    title: {
        fontSize: 27,
        color: 'rgb(225,225,225)',
        lineHeight: 27,
        textAlign: 'center',
    },

    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },

    betslip_button: {
        backgroundColor: 'rgb(41,139,217)',
        width: '60%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center',
        top: '1200%',
        left: '20%'

    },
    logo: {
        height: 80,
        resizeMode: "center"

    },
    funds: {
        color: 'white'
    },
    header: {
        backgroundColor: 'rgb(10,106,250)'
    },
    appTitle: {
        fontSize: 36,
    }
});