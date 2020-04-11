import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TaskList from './TaskList'
import NewTaskModal from './NewTaskModal'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


class LoggedIn extends React.Component{

    state={
        date: '01/01/2020',
        month: '01',
        year: '2020',
        hours: '00',
        min: '00',
        dayOfWk: '0',
        modalVisible: false
    }

    showModal = () => {
        const swtch = !this.state.modalVisible
        this.setState({
            modalVisible: swtch
        })
    }

    componentDidMount() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let hours = new Date().getHours(); //Current Hours
        let min = new Date().getMinutes(); //Current Minutes
        let dayOfWk = new Date().getDay(); //Current Day of the Week
        this.setState({
            date,
            month,
            year,
            hours,
            min,
            dayOfWk
        })
    }

    render(){
        // console.log( 'logged in tasks',this.props.tasks)
        return (
            <View style={styles.fullcontainer}>
                <View style={styles.topContainer}>
                    <View style={{ width: '50%', marginTop: '13.5%', marginLeft: '5%' }}>
                        <View style={styles.innerTop}>
                            <Text style={styles.dateText} numberOfLines={1} >{`  ${days[this.state.dayOfWk]}, ${this.state.date} ${months[this.state.month]}`}</Text>
                        </View>
                    </View>
                    <View style={{ width: '25%' }} />
                    <View style={styles.innerTop}>
                        <TouchableOpacity style={{ width: '5%', paddingBottom: '3%' }} onPress={() => this.showModal()}>
                            <View style={styles.circle}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>+</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', margin: 0, height: '90%', alignContent: 'space-between', }}>
                    <TaskList tasks={this.props.tasks}/>
                </View>
                {this.state.modalVisible ? <NewTaskModal updateTasks={this.props.updateTasks} user={this.props.user} hideModal={this.showModal} addTaskToScreen={this.props.addTaskToScreen} visible={this.state.modalVisible} /> : null}
            </View>
    )}
}
export default LoggedIn
const styles = StyleSheet.create({
    fullcontainer: {
        // backgroundColor: 'rgb(17,17,17)',
        // justifyContent: 'center',
        paddingTop: '5%',
        flex: 1,
        width: '100%'
    },
    container: {
        // backgroundColor: 'rgb(17,17,17)',
        // justifyContent: 'center',
        flex: 1,
        width: '100%'
    },
    topContainer: {
        flexDirection: 'row',
        zIndex: -1
    },
    dateText: {
        // fontFamily: 'helvetica',
        fontSize: 20,
        fontWeight: 'bold'
        // lineHeight: 10

    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'rgb(109, 134, 229)',
        zIndex: 1
    },
    button: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 2,
        paddingBottom: 4
    },

    buttonText: {
        color: 'rgb(255,255,255)',
        fontSize: 40,
    },
    innerTop: {
        justifyContent: 'center',
        paddingVertical: '10%',
    }

});
