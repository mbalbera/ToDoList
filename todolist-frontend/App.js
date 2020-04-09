console.disableYellowBox = true
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoggedOut from './components/LoggedOut'
import TaskList from './components/TaskList'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 class App extends React.Component {
   state = {
     user: true,
     date: '01/01/2020',
     month: '01',
     year:'2020',
     hours:'00',
     min:'00',
     dayOfWk:'0',
   }


   loggedIn =()=>{
     return(
      <View style={styles.fullcontainer}>
         <View style={styles.topContainer}>
           <View style={{width: '50%', justifyContent: 'center', alignItems: 'center' , }}>
             <Text>{`${days[this.state.dayOfWk]}, ${this.state.date} ${months[this.state.month]}`}</Text>
           </View>
           <View style={{width:'25%'}}/>
           <TouchableOpacity style={{ width: '25%', }} onPress={() => console.log('pressed')}>
             <View style={styles.circle}>
               <View style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
               </View>
             </View>
           </TouchableOpacity>
         </View>
         <View style={{width:'100%', margin:0 ,height:'90%', alignContent:'space-between', }}>
            <TaskList/>
         </View>
      </View>
     )
   }

   componentDidMount(){
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
    return (
      <View style={styles.container}>
        
        {this.state.user ? this.loggedIn():<LoggedOut/>}
      </View>
    );
  }
}

export default App
const styles = StyleSheet.create({
  fullcontainer: {
    // backgroundColor: 'rgb(17,17,17)',
    // justifyContent: 'center',
    paddingTop: '5%',
    flex: 1,
    width:'100%'
  },
  container: {
    // backgroundColor: 'rgb(17,17,17)',
    // justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  topContainer:{
    paddingVertical: '10%',
    flexDirection:'row'
  },
  dateText:{
    // fontFamily: 'helvetica',
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
    alignItems: 'center'
  },

  buttonText:{
    color: 'rgb(255,255,255)',
    fontSize: 40,
  }

});
