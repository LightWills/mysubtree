import React from 'react'
import { Animated, Dimensions  } from 'react-native';

export default class MyAnimation extends React.Component {


    constructor(props) {  
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let {width} = Dimensions.get('window');

        this.state ={
           pan: new Animated.ValueXY({x: width, y:0})
        }
        // this.fetchWeather();
    }

    componentDidMount(){
      Animated.sequence([
        Animated.delay(this.props.delay),
        Animated.timing(
          this.state.pan,
          {
              toValue: {x: 0, y:0}
          }
      )
      ]).start()
    }

    render() {
        
        return (
          <Animated.View
            style={{...this.props.style,
            transform: this.state.pan.getTranslateTransform()
            }}>
            {this.props.children}
          </Animated.View>
        );
      }
}
