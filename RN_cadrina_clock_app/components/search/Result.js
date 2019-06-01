import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';


export default class Result extends React.Component {

    constructor(props) {  
        super(props);
        this.state ={
            // city : this.props.navigation.state.params.city,
            city : 'Paris',
            data : null
        }
    }
      
    fetchWeather()
    {
        let api_url = `https://samples.openweathermap.org/data/2.5/weather?q=${this.state.city},uk&appid=b6907d289e10d714a6e88b30761fae22`;
        axios.get(api_url)
             .then(response => {
                this.setState({ data: response.data });
              })
    }
    render (){
        let api_url = `https://samples.openweathermap.org/data/2.5/weather?q=${this.state.city},uk&appid=b6907d289e10d714a6e88b30761fae22`;
        axios.get(api_url)
             .then(response => {
                this.setState({ data: response.data });
                console.log(this.state.data);
                
              })
        if(this.state.data === null   || this.state.data === undefined  )
            {
                return (
            
                    <View style={aboutStyle.conatiner}>
                        <Text>Nulll</Text>
                    </View>
                );
            } 
            else
            {
                return (
            
                    <View style={aboutStyle.conatiner}>
                        <Text>Result</Text>
                    </View>
                );
                
            }
        
    };

    static navigationOptions = (params) => {
        
        return {
            // title: `Weather / ${params.navigation.state.params.city} `
            title: `Weather /  Paris`
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