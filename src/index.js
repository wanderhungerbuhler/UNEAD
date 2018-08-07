import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, Tabs, Text, Tab, Left, Body, TabHeading, Icon, Right, Button, Badge, Thumbnail } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Secretary from './components/Secretary';
import Profile from './components/Profile';

import Quadros from './components/Screens/Quadros';
import AgendamentoProvas from './components/Screens/AgendamentoProvas';
import DataProvas from './components/Screens/DataProvas';
import Notas from './components/Screens/Notas';

class Index extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render(){
        return(
            <MainNavigator />
        );
    }
}

const MainNavigator = createStackNavigator({
    Home: { screen: 
        createBottomTabNavigator({
          Home: { screen: Home },
          Calendar: { screen: Calendar },
          Secretary: { screen: Secretary },
          Profile: { screen: Profile },
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

}
,{
    navigationOptions: {
        headerTitle: <Image resizeMode="center" style={{width: 150, height: 60, alignSelf:'center', resizeMode:'contain'}} source={require('./images/logo-color.png')} />
    }
},{
    initialRouteName: 'Home',
});

console.disableYellowBox = true;
export default Index;