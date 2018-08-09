import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, Tabs, Text, Tab, Left, Body, TabHeading, Icon, Right, Button, Badge, Thumbnail } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Secretary from './components/Secretary';
import Profile from './components/Profile';

const Btn = () => (
    <Button vertical rounded transparent style={{marginTop: 10}}>
        <Icon name="ios-menu" style={{color:'#333'}} />
    </Button>
  )

const Notify = () => (
    <Button vertical rounded transparent style={{marginTop: 10}}>
        <Icon name="ios-notifications" style={{color:'#333'}} />
    </Button>
)

class Index extends Component {
    static navigationOptions = {
        headerLeft: <Btn />,
        headerTitle: <Image style={{width: 90, height: 80}} source={require('./images/logo-color.png')} />,  
        headerRight: <Notify />
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    render(){
        return(
            <MainNavigator />
        );
    }
}

const MainNavigator = createMaterialTopTabNavigator({
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
});

console.disableYellowBox = true;
export default Index;