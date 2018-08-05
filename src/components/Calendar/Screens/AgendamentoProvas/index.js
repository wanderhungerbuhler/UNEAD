import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

export default class AgendamentoProvas extends Component{
    static navigationOptions = {
        headerTitle: 'Agendamentos de Provas'
    }
    render(){
        return(
            <View style={styles.container}>
                <Icon name="ios-paper" style={styles.iconQuadros}/>
                <Text style={styles.textQuadros}>
                    Não existem avaliações disponíveis para agendamento.
                </Text>
            </View>
        );
    }
   
}