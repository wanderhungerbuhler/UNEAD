import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Right, Icon } from 'native-base';

import styles from './styles';

const Paginas = props => {
    const { onPress } = props;
    return (
    <TouchableOpacity onPress={() => {
        console.log('Foi clicado');
        onPress();
    }}>
        <Card style={styles.cardOpacity}>
                    <CardItem style={styles.cardStyle}>
                        <Icon name={props.icons} />
                        <Text>{props.title}</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
    </TouchableOpacity>
    );
}

export default Paginas;