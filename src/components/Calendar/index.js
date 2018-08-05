import React, { Component }from 'react';
import { View, Text, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Toast, Right, Card, CardItem, Icon, Header, Body, Title, Tabs, Tab, Button } from 'native-base';

import { withNavigation } from 'react-navigation';

import styles from './styles';

class Calendar extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-calendar-outline" style={{color: tintColor}}/>
        }    
    }

    render(){
        return(
            <Container>
            <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Quadros')}
                >  
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-alarm" />
                        <Text>Quadro de Horários</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AgendamentoProvas')}
                >
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-paper" />
                        <Text>Agendamento de Provas</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>                        
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DataProvas')}
                >
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-calendar" />
                        <Text>Datas de Provas</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Notas')}
                >
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-arrow-down" />
                        <Text>Notas de Provas</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-stats" />
                        <Text>Frequência</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name="ios-list-box" />
                        <Text>Histórico Escolar</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </Container>
        );
    }
}

export default withNavigation(Calendar); 