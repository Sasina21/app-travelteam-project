import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Image, ScrollView} from 'react-native';
import { Container, Content, Text, Button,Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';



export default class GetHelp extends Component {
  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Icon name="alert"  />
    ),
    
  }
  render(){
    return(
      <Container>
       
        <Content style={{marginTop: '65%'}} >
        
        <Button danger style={{alignSelf: 'center'}}>
            <Text>Help Me!</Text>
        </Button>

        <Text style={{alignSelf: 'center', marginTop: '5%'}}>If you get lost ,Guide will know your GPS</Text>

        </Content>
        
      </Container>
    );
  }
  
}
