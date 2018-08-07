import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: metrics.padding,
        backgroundColor: colors.lighter,
    },

    cardOpacity:{
        elevation: 1,
        padding: 10,
    },

    cardStyle: {
        justifyContent: 'space-between',
        alignItems: 'center', 
        flex:1, 
        flexDirection: 'row',
    }
});

export default styles;