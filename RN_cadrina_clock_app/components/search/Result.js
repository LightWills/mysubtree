import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';



export default class Result extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
      

    render (){
        return (
            <View style={aboutStyle.conatiner}>
                <Text>Result</Text>
            
                
            

            </View>
        );
    };

    static navigationOptions = {
        title: "Weather"
       
    }
  
}
const aboutStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
})