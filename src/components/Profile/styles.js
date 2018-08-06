import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.lighter,
        padding: metrics.padding,
        justifyContent: 'center',
    },

    logoCarteirinha: {
        width: 100,
        height: 50
    },

    alunoContainer:{
        padding: metrics.padding,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderRadius: 5,
        elevation: 1,
    },

    carteirinhaInfo:{
        fontWeight: 'bold',
        marginTop: 15,
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center'       
    },

    alunoText: {
        fontSize: 15,
        marginTop: 5
    },

    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10
    },

    avatar:{
        width: 150,
        height: 150,
        marginRight: 15,
        borderRadius: 75,
        marginTop: -40,
    },

    checkIcon: {
        position: 'relative',
        fontSize: 40,
        left: 50,
        top: 110,
        color: '#2f8cc6',
        zIndex: 1,
    },
});

export default styles;