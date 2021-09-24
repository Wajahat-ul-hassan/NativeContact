import React from "react";
import {View , Text , Button } from "react-native"
import messaging from '@react-native-firebase/messaging';


class App extends React.Component{
  requestUserPermission = async  () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
      console.log("enable");
      messaging().getToken().then(token => {
         console.log(token);
      }).catch(err => {
        console.log(err)
      })
    }else  {

    }
  }
  render(){
    return(
      <View>

  <Button
    title={'Button'}
    onPress={this.requestUserPermission}
  />
      </View>
    )
  }
}

export default App;