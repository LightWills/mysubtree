import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';



export default class Result extends React.Component {

    constructor(props) {  
        super(props);
        this.state ={
            city : this.props.navigation.state.params.city,
            data : null
        }
    }
      

    render (){
        return (
            <View style={aboutStyle.conatiner}>
                <Text>Result</Text>
            
                
            

            </View>
        );
    };

    static navigationOptions = (params) => {
        
        return {
            title: `Weather / ${params.navigation.state.params.city} `
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