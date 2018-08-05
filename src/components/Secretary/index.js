import React, { Component }from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Right, Card, CardItem, Icon, Header, Body, Title, Tabs, Tab, Button } from 'native-base';

import styles from './styles';

class Secretary extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-barcode-outline" style={{color: tintColor}}/>
        }    
    }

    render(){
        return(
            <Container>
            <View style={styles.container}>     
                <TouchableOpacity>
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-barcode" />
                        <Text>Boletos</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="md-calendar" />
                        <Text>Atendimento Agendado</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>                        
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-paper" />
                        <Text>Requerimento</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>
            </View>
            </Container>
        );
    }
}

export default Secretary; 