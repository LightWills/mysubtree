import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator, FlatList ,
    createStackNavigator , createAppContainer, createBottomTabNavigator
} from 'react-native';
import * as FirebaseConfig from '../../data/config_db'
import firebase from 'firebase';
import Row from '../search/Row'
import * as myConfig from '../../myConfig/styles_color';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(FirebaseConfig.firebaseConfig);
      
    }

    componentDidMount() {
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
            // console.log(this.state.data);
            


            });
            
             
        }, 1000);

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
                
                <View style={aboutStyle.container}>
                    <FlatList
                        data={
                            this.state.data
                        }
                        renderItem={
                            ({item, index}) => <Row style={styles.item}  alarm= {item} index={parseInt(index, 10)} ></Row>
                            // ({item, index}) => <Text>{item.user}</Text>
                        }
                        keyExtractor={(item, index) => index.toString()}  
                    />
            </View>  
            );
            
        }
        else
        {
            return (
                <View style={aboutStyle.conatiner}>
                    <Text>Home View - nothing data</Text>
                </View>
            );
        }
    }

    static navigationOptions = {
        title: 'Alarm',
        }
  
}
const aboutStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
})
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    header: {
        backgroundColor: myConfig.buttonbackgroudSearchweather,
        color: 'white'        
   
    },
    headerTitle: {
        color: myConfig.textColor,
        color : 'white'
   
    }

  })


const navigationOptions = {
    headerStyle : styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: myConfig.textColor
    

}

