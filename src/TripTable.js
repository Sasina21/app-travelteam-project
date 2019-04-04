import React, { Component } from 'react';

import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import DailyTable from './DailyTable'
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
          <HeaderBar/>
          
            <Tabs renderTabBar={()=> <ScrollableTab />}>
              <Tab heading="Day 1">
              <Content style={{paddingBottom: "100%"}}>
                <DailyTable/>
              </Content> 
              </Tab>
              <Tab heading="Day 2">
              <DailyTable/>
              </Tab>
              <Tab heading="Day 3">
              <DailyTable/>
              </Tab>
              <Tab heading="Day 4">
              <DailyTable/>
              </Tab>
              <Tab heading="Day 5">
              <DailyTable/>
              </Tab>
            </Tabs>
        
        <FooterBar/>
      </Container>
    );
  }
}