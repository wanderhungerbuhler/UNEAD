import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, Tabs, Text, Tab, Left, Body, TabHeading, Icon, Right, Button, Badge, Thumbnail } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Secretary from './components/Secretary';

import Quadros from './components/Calendar/Screens/Quadros';
import AgendamentoProvas from './components/Calendar/Screens/AgendamentoProvas';
import DataProvas from './components/Calendar/Screens/DataProvas';
import Notas from './components/Calendar/Screens/Notas';

import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

export default class Index extends Component {
    componentDidMount() {
        SplashScreen.hide()
      }

    render(){
        return(
            <HomeStack />
        );
    }
}

const HomeStack = createStackNavigator({
    Home: { screen: 
        createMaterialTopTabNavigator({
          Home: { screen: Home },
          Calendar: { screen: Calendar },
          Secretary: { screen: Secretary }
      },{
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: 'white',
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
            activeTintColor: '#333',
            inactiveTintColor: 'gray',
        },
    })
}, 
    Quadros: { screen: Quadros },
    AgendamentoProvas: { screen: AgendamentoProvas },
    DataProvas: { screen: DataProvas },
    Notas: { screen: Notas },

}, {
    navigationOptions: {
        headerStyle: {
          backgroundColor: 'rgba(33, 55, 149, 1)',
          elevation: 0,
        },
        headerTintColor: 'rgba(255,255,255,.5)',
        headerTitleStyle: {
            alignSelf: 'center'
        }
        // headerLeft: (
        //     <Image resizeMode="center" style={{width: 150, height: 60, alignSelf:'center', resizeMode:'contain'}} source={require('./images/logo.png')} />
        // ),
    }
});