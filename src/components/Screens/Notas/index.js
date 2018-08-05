import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

export default class Notas extends Component{
    static navigationOptions = {
        headerTitle: 'Notas de Provas'
    }
    render(){
        return(
            <View style={styles.container}>
                <Icon name="ios-arrow-down" style={styles.iconQuadros}/>
                <Text style={styles.textQuadros}>
                    Não existem lançamentos de notas para você no Período Acadêmico vigente.
                </Text>
            </View>
        );
    }
   
}