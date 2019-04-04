import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { createStackNavigator } from 'react-navigation'

// const MainNavigator = createStackNavigator({
//   Home: {screen: Home},
//   Schedule: {screen: Schedule},
// });

export default class FooterBar extends Component {
  render(){
    return(
      <View style={styles.bottomView}  >
      <Footer style={{backgroundColor: "#ffca28"}}>
          <FooterTab>
            <Button style={styles.active}>
              <Icon name="home" style={styles.icon} />
            </Button>
            <Button>
              <Icon name="alarm" style={styles.icon}/>
            </Button>
            <Button >
              <Icon name="chatboxes" style={styles.icon} />
            </Button>
            <Button>
              <Icon name="alert" style={styles.icon} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
          
    );
  }
  
}

const styles = StyleSheet.create({
  icon: {
    color: "black",
    fontSize: 30,
  },
  active:{
    backgroundColor: "#ffd54f",
  }
});

