import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation';

import MainNavigator from './index';

import Main from './index';

import Quadros from './components/Screens/Quadros';
// import AgendamentoProvas from './components/Screens/AgendamentoProvas';
// import DataProvas from './components/Screens/DataProvas';
// import Notas from './components/Screens/Notas';



const Navigator = createStackNavigator({
  Main: { screen: Main },
  
},{
    Quadros: { screen: Quadros },
  }
);

export default class App extends Component {
  render(){
    return(<Navigator />);
  }
}