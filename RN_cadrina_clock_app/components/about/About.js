import React from 'react'
import { Text, View , StyleSheet, Button } from 'react-native';


export default class About extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
      
    searchWeather()
    {
        this.props.navigation.navigate('Weather')         
    }

    render (){
        const { navigate } = this.props.navigation;
        return (
            <View style={aboutStyle.conatiner}>
                <Text style={aboutStyle.mytext} >Cadrina Clock APP</Text>
                 {/* <ActivityIndicator color="#348765" size="large" animating={true}/>  */}
                <Button style= {aboutStyle.buttonSearchWeatherStyle} 
                    onPress ={() => {this.searchWeather()} }
                    title = "Search Weather" 
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                <Text style={aboutStyle.subText}>For You</Text>

            </View>
        );
    };
  
}
const aboutStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        margin: 10
    },
    mytext: {
        fontSize: 22,
        margin: 20
    },
    subText: {
        fontSize: 15,
        margin: 20
    },
    buttonSearchWeatherStyle: {
   
    }
})