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


// import MainScreen from 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
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
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: () => ({
      // headerTintColor: 'red',
      headerStyle:{
        backgroundColor: '#ffca28',
        elevation: 0,
        showdowOpacity: 0,
      },
    })
  }
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerRight: <Text>hi</Text>
    }
  }
}
);


const App = createAppContainer(MainNavigator);

export default App;
