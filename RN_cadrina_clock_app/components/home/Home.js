import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator } from 'react-native';



export default class Home extends React.Component {

    constructor(props) {
        super(props);
      
    }

     componentDidMount() {
        if(this.state.data === 0)
            {
                this.setState({ data: 1});

            }
           
      }
    state = {
        isLoadingComplete: false, 
        data: 0
      };

      
    _updateMyData()
    {
        if(this.state.data === 0)
        {
            this.setState({ data: 1});

             
        }

    }
      

    render (){
         
    console.log('render');
    // this.setState({ isLoadingComplete: true });
    if(this.state.data === 1)
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