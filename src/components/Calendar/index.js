import React, { Component }from 'react';
import { View, Text, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Toast, Right, Card, CardItem, Icon, Header, Body, Title, Tabs, Tab, Button } from 'native-base';

import styles from './styles';

import Paginas from './Paginas';

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
              <Paginas icons="ios-alarm" title="Quadro de Horários"
                  onPress={() => { this.props.navigation.navigate('Quadros'); }} />

              <Paginas icons="ios-paper" title="Agendamento de Provas"
                  onPress={() => { this.props.navigation.navigate('AgendamentoProvas'); }} />

              <Paginas icons="ios-calendar" title="Datas de Provas"
                  onPress={() => { this.props.navigation.navigate('DataProvas'); }} />

              <Paginas icons="ios-arrow-down" title="Notas de Provas"
                  onPress={() => { this.props.navigation.navigate('Notas'); }} />
              
              <Paginas icons="ios-stats" title="Frequência" 
                  onPress={() => {}} />
              <Paginas icons="ios-list-box" title="Histórico Escolar"
                  onPress={() => {}} />
            </View>
            </ScrollView>
            </Container>
        );
    }
}

export default Calendar; 