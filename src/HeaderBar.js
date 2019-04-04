import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import { Header, Thumbnail, Left, Body, Right, Button, Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';



export default class Home extends Component {
  render(){
    return(
      <View >
          <Header style={{backgroundColor: "#ffca28", paddingBottom: "6%"}} iosBarStyle="light-content">
          <Left>
            <Button transparent>
              <Icon name="ios-arrow-back" style={styles.icon}></Icon>
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}>My Trips</Text>
          </Body>
          <Right>
            <Button transparent>
              {/* <Icon name="gift" style={styles.icons}></Icon> */}
              <Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={{ uri: 'https://image.shutterstock.com/image-vector/people-icon-260nw-522300817.jpg' }} />
            </Button>
          </Right>
        </Header>
      </View>
          
    );
  }
  
}

const styles = StyleSheet.create({
  icon: {
    color: "black",
    fontSize: 20,
  },
  headerText: {
    color: "black",
    fontSize: 21,
    fontWeight: "600",
  },
});
