import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator, ListView } from 'react-native';
import axios from 'axios';


export default class Result extends React.Component {

    constructor(props) {  
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state ={
            // city : this.props.navigation.state.params.city,
            city : 'Paris',
            dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
        this.fetchWeather()
    }
      
    fetchWeather()
    {
        let appiKey = '6eed9f9486ee2e65da7418db742043be'
        let api_url = `
        http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=7&appid=${appiKey}
        `;
        axios.get(api_url)
             .then(response => {
                //  var paterns = new Array()
                //  response.data.listforEach(element => {
                     
                //  });
                this.setState({ dataSource: this.state.dataSource.cloneWithRows (response.data.list) });
              })
    }
    render (){
      
        if(this.state.dataSource === null   || this.state.dataSource === undefined  )
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
            
                    <ListView>
                        dataSource= {this.state.dataSource}
                        renderItem={({item}) => <Text >{item.temp.day}</Text>}
                    </ListView>
                    
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