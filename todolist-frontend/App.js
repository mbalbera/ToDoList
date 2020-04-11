console.disableYellowBox = true
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 class App extends React.Component {
   state = {
     user: false,
     tasks: []
   }

  login = (nameInput) => {
    fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameInput })
    })
      .then(resp => resp.json())
      .then(d => this.parseData(d,'login'))
  }

  parseData = (d)=>{
      this.setState({user:d.user, tasks:d.tasks})
  }
   addTaskToScreen =(task)=>{
     const tasks = [...this.state.tasks, task]
    this.setState({tasks})
  }

   deleteTask = (id) => {
     fetch(`http://localhost:3000/api/v1/tasks/delete/${id}`, {
         method: 'DELETE'
     }).then(response =>
         response.json().then(json => {
             return json;
         })
     );
     const data = this.state.tasks.filter(row => row.id !== id)
     this.setState({ tasks: data })
   }

   completeTask=(id)=>{
     fetch(`http://localhost:3000/api/v1/tasks/complete/${id}`, {
       method: 'PATCH'
     }).then(response =>
       response.json().then(json => {
         return json;
       })
     );
     const data = []
     this.state.tasks.forEach(row => {
        if(row.id !== id){
          data.push(row)
        }else{
          data.push({ 
            text: row.text,
            id: row.id,
            completed: !row.completed,
            time: row.time
          })
        }
      })
     this.setState({ tasks: data })
   }


  render(){
    return (
      <View style={styles.container}>
        {this.state.user ? <LoggedIn completeTask={this.completeTask} deleteTask={this.deleteTask} parseData={this.parseData} addTaskToScreen={this.addTaskToScreen} user={this.state.user} tasks={this.state.tasks}/>:<LoggedOut login={this.login}/>}
      </View>
    );
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgb(17,17,17)',
    // justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  
});
