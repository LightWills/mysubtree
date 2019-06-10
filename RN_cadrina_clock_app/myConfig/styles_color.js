
import { Text, View , StyleSheet } from 'react-native';


/**
|--------------------------------------------------
| This class is using for keep all genaral config
  https://www.color-hex.com/
|--------------------------------------------------
*/

const backgroud = "black";
const textColor = "white";

const  baseColorButtonActive = "white";
const  baseColorButtonInactive= "gray";

const  backgroundColorActive = '#041725' ;
const  backgroundColorInactive= "#041725";

const borderColor = 'red';


/**
|--------------------------------------------------
| Search style in Search style component
|--------------------------------------------------
*/
const buttonbackgroudSearchweather = "#041725";
const titleHearderSearchBar = "#041725";




const stylesResult = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});
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
});
const aboutStyle = StyleSheet.create({
        conatiner: {
            flex: 1,
            justifyContent: "center", 
            alignItems: "center"
        }
});

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


export {
    backgroud,
    textColor,
    baseColorButtonActive,
    baseColorButtonInactive,
    backgroundColorActive,
    backgroundColorInactive,
    borderColor,
    buttonbackgroudSearchweather,
    titleHearderSearchBar









}

