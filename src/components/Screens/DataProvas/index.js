import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

export default class AgendamentoProvas extends Component{
    static navigationOptions = {
        headerTitle: 'Datas de Provas'
    }
    render(){
        return(
            <View style={styles.container}>
                <Icon name="ios-calendar" style={styles.iconQuadros}/>
                <Text style={styles.textQuadros}>
                    Não existe datas de provas para disciplinas presenciais
                </Text>
            </View>
        );
    }
   
}