import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: metrics.padding,
        backgroundColor: colors.lighter,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconQuadros:{
        fontSize: 120,
        color: colors.light,
    },

    textQuadros: {
        textAlign: 'center',
        width: '80%',
        color: colors.light,
    },
});

export default styles;