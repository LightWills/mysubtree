import React from 'react'
import { Text, View , StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import MyAnimation from '../../animation/myanimation'
export default class Row extends React.Component {

    //get a specifique type at the props  
    static propTypes ={
        day: PropTypes.object,
        index: PropTypes.number
    }

    getDay()
    {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return(
            <Text style={[rowStyle.white, rowStyle.bold]} >
                { day.toUpperCase() }
            </Text>
        )
    }

    getDate()
    {
        let day = moment(this.props.day.dt * 1000).format('DD/MM');
        return(
            <Text >
                { day }
            </Text>
        )
    }

    icon (size) {
         const type = this.props.day.weather[0].main.toLowerCase();
        let name ;
        switch (type) {
            case 'clouds':
                name = `ios-cloud`;
                break;
            case 'rain':
                name = `ios-rainy`;
                break;
            default:
                name = 'ios-sunny';
                break;
        }
        return  <Ionicons name={name} size={size} color='blue' />;

        // return (
        // <Text>
        //     {type}
        // </Text>
        // )

    }

    render(){
        if(this.props.index === 0)
        {
            return (
                <MyAnimation delay= {this.props.index * 30} >
                     <View style= {[ rowStyle.flex,rowStyle.view, rowStyle.firstView]}>
                        <View >
                            <Text style= {{color: '#FFF'}}>
                                {this.getDay()} {this.getDate()}
                            </Text>

                            {this.icon(90)}

                    
                        </View>
                            <Text style={[rowStyle.temperature, {fontSize: 35}]} >
                                {Math.round(this.props.day.temp.day)} °C
                        </Text>
                    </View>
                </MyAnimation>
            )
        }
        else
        {
            return (
                <MyAnimation delay= {this.props.index * 30} > 
                    <View style= {[ rowStyle.flex,rowStyle.view]}>
                        <View style={rowStyle.flex}>
                            {this.icon(50)}

                            <Text style= {rowStyle.date_and_day}>
                            {this.getDay()} {this.getDate()}
                            </Text>
                        </View>
                        <Text style={rowStyle.temperature} >
                            {Math.round(this.props.day.temp.day)} °C
                        </Text>
                    </View>

                </MyAnimation>  
            )

           

        }
       
    }


}
const rowStyle = StyleSheet.create({
    view: {
     backgroundColor: '#394163',
     borderWidth: 0,
     borderBottomWidth: 1,
     borderBottomColor: '#675432',
     paddingHorizontal: 20,
     paddingVertical:  10,
     justifyContent: 'space-between',
 
    },
    firstView:{
        backgroundColor: 'red',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 80,
    },
    temperature: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
      },
    white: {
        color: 'white'
      },
    bold: {
        fontWeight: 'bold'
      },
      date_and_day: {
          marginLeft: 10
      }
  })