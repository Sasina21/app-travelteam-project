import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Thumbnail, Body, Left, Icon } from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Chat extends Component {
  static navigationOptions = {
      tabBarIcon: ({focused}) => (
        <Icon name="chatboxes"  />
      ),
      
    }
  
  render() {
    return (
    <Container>
   
    </Container>
    );
  }
}

