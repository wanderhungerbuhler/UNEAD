import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation';

import Main from './index';
const Btn = () => (
  <Button vertical rounded transparent style={{marginTop: 10}}>
      <Icon name="ios-menu" />
  </Button>
)

const Navigator = createStackNavigator({
  Main: { screen: Main }
});

export default class App extends Component {
    static navigationOptions = {
      headerLeft: <Btn />,
      
      headerTitle: <Image style={{width: 90, height: 80}} source={require('./images/logo-color.png')} />,

      headerRight: <Icon
          name={Platform.OS === 'android' ? 'ios-notifications' : 'ios-notifications-outline'} style={{paddingRight: 10}} />,
  }

  render(){
    return(<Navigator />);
  }
}