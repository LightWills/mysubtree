import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';
import * as FirebaseConfig from '../../data/config_db'
import firebase from 'firebase';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(FirebaseConfig.firebaseConfig);
      
    }

    componentDidMount() {
        {
              setTimeout((index) => {
                var tasks = [];
                const ref = firebase.database().ref(FirebaseConfig.myTableName);
                ref.on("value",(dataSnapshot)  => {

                    dataSnapshot.forEach(child => {
                        tasks.push({
                          enabled: child.val().enabled,
                          heure: child.val().heure,
                          min: child.val().min,
                          user: child.val().user,
                          key: child.key
                        });
                      });

                    this.setState({
                        data: tasks,
                        loading : true
                      });  
                // console.log(dataSnapshot.val());
                // console.log(tasks);
                // console.log();
                // console.log();
                console.log(this.state.data);


                });
                
                 
            }, 1000);

        }
           
      }
    state = {
        loading: false,
        data: []
      };



    render ()
    {
                 // this.setState({ isLoadingComplete: true });
        if(this.state.data.length != 0)
        {
        
            return (
                <View style={aboutStyle.conatiner}>
                    <Text>Set state change </Text>
                </View>
            );
            
        }
        else
        {
            return (
                <View style={aboutStyle.conatiner}>
                    <Text>Home View - nothing chnaged</Text>
                </View>
            );
        }
    }


  
}
const aboutStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
})