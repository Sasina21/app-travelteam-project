import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Image, ScrollView} from 'react-native';
import { Container, Content, Text, Button,View } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import FooterBar from './FooterBar'
import HeaderBar from './HeaderBar'


export default class GetHelp extends Component {
  render(){
    return(
      <Container>
        <HeaderBar/>
        <Content style={{marginTop: '65%'}} >
        
        <Button danger style={{alignSelf: 'center'}}>
            <Text>Help Me!</Text>
        </Button>

        <Text style={{alignSelf: 'center', marginTop: '5%'}}>If you get lost ,Guide will know your GPS</Text>

        </Content>
        <FooterBar/>
      </Container>
    );
  }
  
}
