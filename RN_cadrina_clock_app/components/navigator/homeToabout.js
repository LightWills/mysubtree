import  { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import About from '../about/About';
import Home from '../home/Home';


const MyTabNavigator = createBottomTabNavigator({
    Home: Home,
    About: About,
  });
  export default createAppContainer(MyTabNavigator);
  