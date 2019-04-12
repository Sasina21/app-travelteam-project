/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator , createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'native-base'
import Home from './src/Home'
import Schedule from './src/Schedule'
import ChatBox from './src/Chat'
import GetHelp from './src/GetHelp'
import TripTable from './src/TripTable'
import SignIn from './src/SignIn'


// import MainScreen from 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const TabNavigator = createBottomTabNavigator({
  MyTrips: {
    screen: Home,
    // headerTitle: "My Trips"
  },
  Schedule: {screen: Schedule},
  ChatBox: {screen: ChatBox},
  GetHelp: {screen: GetHelp}
},{tabBarOptions:{
  showLabel: false,
  style: {
    backgroundColor: '#ffca28',
  },
},
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle: routeName
    }
  }
},
);


const MainNavigator = createStackNavigator({
  // SignIn: {
  //   screen: SignIn,
  // },
  TabNavigator: {
    screen: TabNavigator,
  },TripTable:{
    screen: TripTable,
  },
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerRight: <Text>hi</Text>,
      headerTintColor: 'black',
      headerStyle:{
        backgroundColor: '#ffca28',
      },
    }
  }
}
);


const App = createAppContainer(MainNavigator);

export default App;
