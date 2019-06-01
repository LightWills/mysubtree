import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';



export default class Home extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
      

    render (){
        return (
            <View style={aboutStyle.conatiner}>
                <Text>Home View</Text>
            </View>
        );
    };


  
}
const aboutStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
})