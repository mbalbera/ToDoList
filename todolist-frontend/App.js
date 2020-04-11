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
    console.log('loggin in')
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

  render(){
    // console.log('App state tasks, last', this.state.tasks[this.state.tasks.length-1])
    return (
      <View style={styles.container}>
        {this.state.user ? <LoggedIn updateTasks={this.parseData} addTaskToScreen={this.addTaskToScreen} user={this.state.user} tasks={this.state.tasks}/>:<LoggedOut login={this.login}/>}
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
