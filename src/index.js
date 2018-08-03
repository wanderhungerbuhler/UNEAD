import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, Tabs, Text, Tab, Left, Body, TabHeading, Icon, Right, Button, Badge, Thumbnail } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Secretary from './components/Secretary';

import { createMaterialTopTabNavigator } from 'react-navigation';

export default class Index extends Component {
    componentDidMount() {
        SplashScreen.hide()
      }

    render(){
        return(
        <Container style={styles.container}>
            <Header style={{backgroundColor: '#213795'}} androidStatusBarColor="#213795" hasTabs>
                <Left>
                    <Button small rounded vertical transparent>
                        <Icon name="ios-menu"/>
                    </Button>
                </Left>
                <Body>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                </Body>
                <Right>
                    <Button small badge rounded vertical transparent>
                        <Icon name="ios-notifications-outline"/>
                        <Badge small><Text>2</Text></Badge>
                    </Button>
                </Right>
            </Header>
            <View style={styles.alunoContainer}>
                <Icon name="ios-checkmark-circle" style={styles.checkIcon} />
                <Thumbnail circle large style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/22423436?s=460&v=4' }} />
                <View style={styles.profileInfo}>    
                    <Text style={styles.name}>Wander de S. Hungerbuhler Filho</Text>
                    <View>
                        <Text style={{fontSize: 12}} note>Matricula: 201602562989</Text>
                        <Text style={{fontSize: 12}} note>CPF: 145.695.497-05</Text>
                        <Text style={{fontSize: 12}} note>Data de Nascimento: 05/04/1995</Text>
                        <Text style={{fontSize: 12}} note>Curso: Sistema da Informação</Text>
                        <Text style={{fontSize: 12}} note>Validade: 31/12/2018</Text>
                    </View>
                </View>
            </View>
            <TabsNav />
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eee',
    },

    alunoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#FFF',
    },

    profileInfo: {
        width: '70%',
    },

    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    tabHeading: {
        backgroundColor: "#FFF",
    },

    header: {
        backgroundColor: "#213795",
    },

    bottom: {
        backgroundColor: "#213795"
    },

    logo:{
        width: 120,
        height: 40,
    },

    avatar:{
        marginRight: 15,
    },

    checkIcon: {
        position: 'relative',
        left: 80,
        top: 32,
        color: '#2f8cc6',
        zIndex: 1,
    },
});

const TabsNav = createMaterialTopTabNavigator({
    Home: {
        screen: Home
    },

    Calendar: {
        screen: Calendar
    },

    Secretary: {
        screen: Secretary
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'white',
        },
        indicatorStyle: {
            backgroundColor: '#333',
          },
        activeTintColor: '#333',
        inactiveTintColor: 'gray',
    },
});