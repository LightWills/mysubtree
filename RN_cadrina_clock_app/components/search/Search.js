import React from 'react'
import { TextInput, Button } from 'react-native';
import * as myConfig from '../../myConfig/styles_color';


export default class Search extends React.Component {


    constructor(props)
    {
        super(props)
        this.state = {
            city: "Paris"
        }
    }


    setCity(city){
        
        this.setState({city})
    }
    getCity(text)
    { 
        if(text == null || text == "" )
            return this.props.city
        return this.state.city
    }

    render(){
        return(
            <TextInput
                underlineColorAndroid ='transparent'
                onChangeText ={(text) => this.setCity(text)}
                value =  { this.state.city}
                style = {{
                    justifyContent: "center", 
                    alignItems: "center",
                    margin: 50   ,    
                    padding: 5,
                    height : 40,   
                    borderColor: myConfig.borderColor,
                    borderWidth: 1
                }}

            />   
        )
    }


}