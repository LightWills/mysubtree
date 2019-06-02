import React from 'react'
import { Text, View , StyleSheet, ActivityIndicator, ListView, FlatList, List } from 'react-native';
import axios from 'axios';
import * as myConfig from '../../myConfig/styles_color';
import Row from './Row';
export default class Result extends React.Component {

    constructor(props) {  
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state ={
            // city : this.props.navigation.state.params.city,
            city : 'Paris',
            dataSource : [],
            loading: false,
            error: false
        }
        // this.fetchWeather();
    }
    async  getData() {
        try {
            var appiKey = '6eed9f9486ee2e65da7418db742043be'
            var api_url = `
            http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=7&appid=${appiKey}
            `;
           let res = await axios({
                url: api_url,
                method: 'get',
                timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(res.status == 200){
                // test for status you want, etc
                console.log("success")
            }    
            // Don't forget to return something   
            return res.data
        }
        catch (err) {
            console.error("error");
        }
    }
    fetchWeather()
    {
        var appiKey = '6eed9f9486ee2e65da7418db742043be'
        var api_url = `
        http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=7&appid=${appiKey}
        `;
        console.log(api_url);
         axios.get(api_url)
             .then((response) => 
             {
                 console.log("respons ok");

                this.setState({ dataSource: (response.data),
                                error: !(res.error || null), 
                                loading: !(res.error || null)});
             })
          
    }

    async componentDidMount() {
        try {
            console.log("before");
            var appiKey = '6eed9f9486ee2e65da7418db742043be'
            var api_url = `
            http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=7&appid=${appiKey}
            `;
            
            const response = await fetch(api_url);
            const json = await response.json();
            this.setState({ dataSource: json , error: false, loading: true});

            console.log("after");


        } catch (error) {
            this.setState({  error: true});
            console.log(error);
        }
      }
    render (){

        console.log('render');
        if(this.state.loading && !this.state.error)
        {
            console.log("view")
            console.log(this.state.dataSource.list );
            return (this.state.dataSource.length ? 
            (
                <View >
                    <Text>toto</Text>
                </View>
            ) : 
            (
                    
                <View style={styles.container}>
                    <FlatList
                    data={
                        this.state.dataSource.list 
                    }
                    renderItem={
                        ({item, index}) => <Row style={styles.item} day= {item} index={parseInt(index, 10)} ></Row>
                    }
                    keyExtractor={(item, index) => index.toString()}  
                    />
                </View>  

            ))
        }
        else
        {

            return (
                <View style={[resultStyle.sndContainer, resultStyle.horizontal]} >
                  <ActivityIndicator size="large" color={myConfig.backgroundColorActive} />
                </View>
              )
        }
            // {
                
               
            //     // return (
            //         // <ListView>
            //         //     dataSource= {this.state.dataSource}
            //         //     renderItem={({item}) => <Text >{item.temp.day}</Text>}
            //         // </ListView>

            //         // <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            //         //     <FlatList          
            //         //         data={this.state.dataSource.list}          
            //         //         renderItem={({ item }) => <Text > {item.temp.day}</Text>}        
            //         //         ItemSeparatorComponent={this.renderSeparator} 
            //         //         ListHeaderComponent={this.renderHeader}                             
            //         //     />            
            //         // </List>

            //         // <Text>Toto</Text>
            //     // );
                
            // }
        
    };

    static navigationOptions = (params) => {
        
        return {
            // title: `Weather / ${params.navigation.state.params.city} `
            title: `Weather /  Paris`
        }
       
    }
  
}
const resultStyle = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    },sndContainer: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
})

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })