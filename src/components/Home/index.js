import React, { Component }from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail,
     Left, Icon, Text, Header, Body, Title, Tabs, Tab, Button } from 'native-base';

import styles from './styles';

class Home extends Component { 
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
                            <CardItem header bordered>
                                <Left>
                                    <Thumbnail source={require('../../images/unig.png')} />
                                    <Body>
                                        <Text>UNIG</Text>
                                        <Text note>Julho 30, 2018</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={require('../../images/unigwelcome.jpg')} style={{height: 200, width: '100%', flex: 1}} />
                                    <Text note style={{fontSize: 10, textAlign: 'center', marginTop: 10}}>
                                        A UNIVERSIDADE IGUAÇU - UNIG foi reconhecida pelo MEC a partir do amadurecimento das Faculdades Unificadas de Nova Iguaçu, pela Portaria MEC nº 1318, de 16 de setembro de 1993, publicada no D.O.U. de 20/09/93, seção I, pág. 14017. Tem como mantenedora a Associação de Ensino Superior de Nova Iguaçu - SESNI, entidade sem fins lucrativos, de natureza filantrópica, com sede e foro na cidade de Nova Iguaçu - Estado do Rio de Janeiro.
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
            </View>
            </Container>
        );
    }
}

export default Home; 