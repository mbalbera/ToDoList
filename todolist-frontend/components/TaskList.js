import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';
import TaskRow from './TaskRow'

class TaskList extends React.Component {

    state={
        DATA: [
            { id: '1', text: 'walk dog', completed: true, time: '12:00 pm',  },
            { id: '2', text: 'get milk', completed: false, time: '1:00 am', },
            { id: '3', text: 'call mom', completed: false, time: '2:00 am', },
            { id: '4', text: 'take out trash', completed: false, time: '3:00 am', },
            { id: '5', text: 'feed fish', completed: false, time: '4:30 am',  },
            { id: '6', text: 'take medicine', completed: true, time: '5:00 am',  },
            { id: '7', text: 'wash dishes', completed: false, time: '6:00 am',  },
            { id: '8', text: 'wash clothes', completed: false, time: '7:00 am',  },
            { id: '9', text: 'move clothes to drier', completed: false, time: '8:00 am',  },
            { id: '10', text: 'medicine pt 2', completed: false, time: '9:00 am', },
            { id: '11', text: 'fold clothes', completed: false, time: '10:00 am', },
            { id: '12', text: 'bed time', completed: false, time: '12:02 am', }
        ]
    }



    componentDidMount(){
        this.setState({DATA:this.props.tasks})
    }

    completeTask = (row) =>{
        console.log(row)
        // let dt = []
        // this.state.DATA.forEach(rw=>{
        //     if (rw.id == row.id){
        //         dt.push({...row, completed:!rw.completed})
        //     }
        //     else{
        //         dt.push(rw)
        //     }
        // })
        // this.setState({DATA:dt})
        // return dt
    }

    deleteTask = (id)=>{
        // fetch(`http://localhost:3000/api/v1/delete/${id}`, {
        //     method: 'delete'
        // }).then(response =>
        //     response.json().then(json => {
        //         return json;
        //     })
        // );
        const data = this.state.DATA.filter(row=>row.id !== id)
        this.setState({DATA:data})
    }

      //  addTask =(event)=>{
  //    fetch("http://localhost:3000/api/v1/tasks/new", {
  //      method: 'POST',
  //      body: JSON.stringify({
  //         user: this.state.user,
  //         text: event.text, 
  //         completed: event.completed, 
  //         time: event.time, 
  //      }),
  //      headers: {
  //        'Content-Type': 'application/json'
  //      }
  //    })
  //      .then(resp => resp.json())
  //      .then(data => { console.log(data)}
  //  }

   render(){
    return (
        <View style={styles.container}>
            <View>
                <View style={{marginHorizontal:'10%',}}>
                    <Text style={{ fontSize: 20, color: 'rgb(109,134,229)', fontWeight: 'bold'}}>
                        {this.state.DATA.length === 1 ? '1 task' : `${this.state.DATA.length} tasks`}
                    </Text>
                    <SafeAreaView style={styles.tasksContainer}>
                        <FlatList
                            data={this.state.DATA}
                            renderItem={({ item }) => <TaskRow deleteTask={this.deleteTask} completeTask={this.completeTask} text={item.text} completed={item.completed} time={item.time} />}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{flex: 1, flexDirection: 'column', height: '100%', width: '100%'}}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )}
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
