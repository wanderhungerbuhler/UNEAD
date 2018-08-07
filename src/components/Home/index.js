import React, { Component }from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail,
     Left, Icon, Text, Header, Body, Title, Tabs, Tab, Button } from 'native-base';

import styles from './styles';

export default class Home extends Component { 
    static navigationOptions = {      
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-bookmark-outline" style={{color: tintColor}}/>
        }
    }

    render(){
        return(
            <Container>
            <View style={styles.container}>
                    <Content>
                        <Card>
                            <CardItem header>
                                    <Body>
                                        <Text style={{color: '#213795', fontSize: 20, fontWeight: 'bold'}}>
                                        A UNIG está de cara nova e tras a tecnlogia como caso de inovação.
                                        </Text>
                                        <Text note>Julho 30, 2018</Text>
                                    </Body>

                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={require('../../images/unigwelcome.jpg')} style={{height: 200, width: '100%', flex: 1}} />
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
            </View>
            </Container>
        );
    }
}