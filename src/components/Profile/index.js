import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, Tabs, Text, Tab, Left, Body, TabHeading, Icon, Right, Button, Badge, Thumbnail } from 'native-base';

import styles from './styles';

export default class Profile extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-contact-outline" style={{color: tintColor}}/>
        },
    }

    render(){
        return(
            <Container style={styles.container}>
            <View style={styles.alunoContainer}>
                <Image style={styles.logoCarteirinha} source={require('../../images/logo-color.png')} />
                <Icon name="ios-checkmark-circle" style={styles.checkIcon} />
                <Thumbnail circle large style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/22423436?s=460&v=4' }} />
            <Text style={styles.name}>Wander de S. Hungerbuhler Filho</Text>
                <Text style={styles.alunoText} note>Matricula: 00000000000</Text>
                <Text style={styles.alunoText} note>CPF: 000.000.000-00</Text>
                <Text style={styles.alunoText} note>Data de Nascimento: 05/04/1995</Text>
                <Text style={styles.alunoText} note>Curso: Sistema da Informação</Text>
                <Text style={styles.alunoText} note>Validade: 31/12/2018</Text>
                <Text style={[styles.alunoText, styles.carteirinhaInfo]}>Válida mediante apresentação
                    de documento de identidade com foto.
                </Text>
            </View>
        </Container>
        );
    }
}
