import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import { Container, Text, Content, Icon, Button} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import FooterBar from './FooterBar'
import HeaderBar from './HeaderBar'


export default class Schedule extends Component {
  static navigationOptions = {
    header: null,
    };
  render(){
    return(
      <Container>
        <HeaderBar/>
    
        <Content style={{marginLeft: "5%", marginTop : "5%"}}>
          <Text style={{fontSize: 21}}>Harajuku</Text>
          
            <Text style={styles.text}>Start time : 12:00</Text><Icon iconLeft name="alarm" style={styles.icon} />
            <Text style={styles.text}>End time : 13:00</Text>
         
          <Text style={styles.location}>Harajuku</Text>
          <Text style={styles.text}>Start time : 12:00 </Text>
          <Text style={styles.text}>End time : 13:00 </Text>
        </Content>
        <FooterBar/>
      </Container>
    );
  }
  
}
const styles = StyleSheet.create({
  location: {
    color: "black",
    fontSize: 21,
    marginTop: 20,
  },
  text:{
    color: "black",
    fontSize: 18,
    marginTop: 9,
  },
  icon: {
    color: "black",
    // fontSize: 80,
    
  },
});
