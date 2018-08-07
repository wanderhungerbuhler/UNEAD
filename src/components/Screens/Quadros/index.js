import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

export default class Quadros extends Component{
    static navigationOptions = {
        headerTitle: 'Quadros de Horários',
    }
    render(){
        return(
            <View style={styles.container}>
                <Icon name="ios-alarm" style={styles.iconQuadros}/>
                <Text style={styles.textQuadros}>
                    Você não está matriculado em nenhuma disciplina no Período
                    Acadêmico vigente.
                </Text>
            </View>
        );
    }
   
}