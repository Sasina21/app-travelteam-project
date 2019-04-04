import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class DailyTable extends Component {
  render() {
    return (
      <Container>
        <Content>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Harajuku</Text>
                  <Text style={{paddingTop: '2%'}} note>12:30 - 14:20</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpgL'}} 
                style={{height: 200, width: 340, flex: 1}}/>
                <Text>
                  ปราสาทที่งดงามมากๆ แห่งหนึ่ง มีตำนานเล่าขาน
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Harajuku</Text>
                  <Text style={{paddingTop: '2%'}} note>12:30 - 14:20</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpgL'}} 
                style={{height: 200, width: 340, flex: 1}}/>
                <Text>
                  ปราสาทที่งดงามมากๆ แห่งหนึ่ง มีตำนานเล่าขาน
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Harajuku</Text>
                  <Text style={{paddingTop: '2%'}} note>12:30 - 14:20</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpgL'}} 
                style={{height: 200, width: 340, flex: 1}}/>
                <Text>
                  ปราสาทที่งดงามมากๆ แห่งหนึ่ง มีตำนานเล่าขาน
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        
      </Container>
    );
  }
}