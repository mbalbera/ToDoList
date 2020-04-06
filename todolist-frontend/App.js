import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 class App extends React.Component {
   state = {
     user: false
   }

   loggedIn =()=>{
     return(
      <View style={styles.container}>
         <Text>Logged In</Text>
      </View>
     )
   }

   loggedOut = () => {
     return (
       <View style={styles.container}>
         <Text>Logged Out</Text>
       </View>
     )
   }


  render(){
    return (
      <View style={styles.container}>
        {this.state.user ? this.loggedIn():this.loggedOut()}
      </View>
    );
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
