import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Thumbnail, Body, Left, Icon } from 'native-base';
import firebase from '../firebase'

// import HeaderBar from './HeaderBar'
// import FooterBar from './FooterBar'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Home extends Component {

  render() {
    return (
    <Container>
        <Content>
          


          <Card style={{marginTop: "5%"}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpg'}} />
                <Body>
                  <Text>Name Trip</Text>
                  <Text note>Japan</Text>
                  <Text note>3 Days</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        {/* <FooterBar/> */}
    </Container>
    );
  }
}

