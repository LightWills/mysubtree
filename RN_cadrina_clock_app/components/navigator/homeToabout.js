import  { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import About from '../about/About';
import Home from '../home/Home';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import * as myConfig from '../../myConfig/styles_color';

/**
 * This class is using for switnig in a view to another view
 */
class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Ionicons name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center'
                
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }
  
  const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    // https://ionicons.com/cheatsheet.html
    return <IconWithBadge {...props} badgeCount={3} />;
  };
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Home') {
      iconName = `ios-alarm`;
      // We want to add badges to home tab icon
      IconComponent = HomeIconWithBadge;
    } else if (routeName === 'About') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    }
    
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  };

  
const MyTabNavigator = createBottomTabNavigator(
    {
    Home: Home,
    About: About,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: myConfig.baseColorButtonActive ,
      inactiveTintColor: myConfig.baseColorButtonInactive ,
      showLabel: false
    },
  }
  );

  
  export default createAppContainer(MyTabNavigator);
  