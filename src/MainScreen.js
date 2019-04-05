import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Thumbnail, Body, Left, Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './Home'
import Schedule from './Schedule'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// export default class MainScreen extends Component {
//   static navigationOptions = {
//       title: "home"
//     };
//   render() {
//     return (
//     <AppTabNavigator/>
//     );
//   }
// }

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    title:'hi',
  },
  Schedule: {
      screen: Schedule
  }
},{
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#ffca28',
      inactiveBackgroundColor: '#ffca28',
      inactiveTintColor:'#dedede',
      showLabel: false,
      showIcon: true,
    },
  }
)

export default createAppContainer(AppTabNavigator);
