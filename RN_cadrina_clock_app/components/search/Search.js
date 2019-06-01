import React from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native';
import * as myConfig from '../../myConfig/styles_color';
import  { createStackNavigator , createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Home from '../home/Home';
import Result from '../search/Result'

 class Search extends React.Component {


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
        return this.state.city
    }
    
    search(){
         this.props.navigation.navigate('Result', {city:this.state.city})
    }

    render(){
        return(
        <View style={searchStyle.conatiner}>
            <TextInput
                underlineColorAndroid ='transparent'
                onChangeText ={(text) => this.setCity(text)}
                value =  { this.state.city}
                style = {searchStyle.mytextInput}

            /> 
            <Button title="Let's Go"
             onPress = {() => this.search()}
             color = {myConfig.buttonbackgroudSearchweather}

             >
                
            </Button> 
        </View>
        )
    }


    static navigationOptions = {
        title: 'Search your city',
        }
}

const searchStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        margin: 40

    },
    mytextInput: {
        alignItems: "center",
        padding: 5,
        height : 40,   
        borderColor: myConfig.borderColor,
        borderWidth: 1,
        marginBottom: 20
    },
    subText: {
        fontSize: 15,
        margin: 20
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
    headerStyle : searchStyle.header,
    headerTitleStyle: searchStyle.headerTitle,
    headerTintColor: myConfig.textColor
    

}


const searchStack =  createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions
    },
    Result: {
      screen: Result,
      navigationOptions 
    }
  })
  
  export default createAppContainer(createBottomTabNavigator(
    {
      Result_to_Search: searchStack,
     
    },
    {
        defaultNavigationOptions: {
            title: 'Rec',
            tabBarVisible: false
          },
          navigationOptions
      
      /* Other configuration remains unchanged */
    }
  ));
