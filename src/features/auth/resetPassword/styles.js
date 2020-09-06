import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    text_input_title:{
        marginTop:10,
        marginLeft:20,
        fontFamily: 'openSans_regular',
        fontSize: 18,
    },
    text_input_container:{
        borderBottomWidth: 1,
        borderBottomColor: colors.radum_light_gray,
        height: 48,
        alignSelf: 'stretch',
        marginHorizontal: 20,
        fontFamily: 'openSans_regular',
        fontSize: 18,
        color: colors.radum_dark_gray,
    },
    button_container:{
        margin: 20,
        height: 48,
        backgroundColor: colors.radum_orange,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_title:{
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
});

export default styles;