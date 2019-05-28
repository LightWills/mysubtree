import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';




export default class About extends React.Component {

    constructor(props) {
        super(props);
    }
      

    render (){
        return (
            <View style={aboutStyle.conatiner}>
                <Text>Cadrina Clock APP</Text>
                <ActivityIndicator color="#348765" size="large" animating={true}/>
                
                <Text>For You</Text>

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