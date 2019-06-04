import React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as FirebaseConfig from './data/config_db'
import * as myConfig from './myConfig/styles_color';

import firebase from 'firebase';

// impor of navigators
import MyTabNavigator from './components/navigator/homeToabout'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    loading: false,
    dataAlarm: []
  };

  

  add()
  {
    var newPostKey = firebase
      .database()
      .ref()
      .child(FirebaseConfig.myTableName)
      .push().key;

    var updates = {};
      updates["/" +FirebaseConfig.myTableName +"/" + newPostKey] = {
        name: 'test'
      };
    firebase.database().ref().update(updates)
      .then(() => {
          console.log('INSERTED !');
      }).catch((error) => {
          console.log(error);
      });
  }

 

  

  
    constructor(props) {
      super(props);
    
  }

   


         
    

  
     

  render() {
       
    // this.setState({ isLoadingComplete: true });
    return(
      <MyTabNavigator /> 
    )
  
  }

  // render() {
  //   console.log(this.state)
  //   if(this.state.loading === false)
  //   {
  //     return(
  //       <Text>
  //           Chargement
  //         </Text>
  //     )    
  //   }
  //   else
  //   {
  //     console.log('here-----------------------------------------------');
  //     console.log(this.state.dataAlarm)
  //     return(
  //       <Text>
  //          <h3> {this.state.dataAlarm[0].min}  ></h3>
  //         </Text>
  //     )  
  //   }
 
 
  //   // return (
  //   //   <MyTabNavigator /> 
  //   // );

  // }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
// const aboutStyle = StyleSheet.create({
//   conatiner: {
//       flex: 1,
//       justifyContent: "center", 
//       alignItems: "center"
//   }
// })