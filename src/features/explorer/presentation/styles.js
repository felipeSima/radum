import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        marginTop:60,
        marginHorizontal:16,
    },
    user_container:{
        alignItems: 'flex-start',
    },
    user_title:{
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: colors.radum_orange,
    },
    user_address:{
        fontFamily: 'openSans_regular',
        fontSize: 14,
        color: colors.radum_subtitle, 
    },
    text_input_container:{
        paddingLeft:10,
        marginTop:15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.radum_light_gray,
        height: 48,
        alignSelf: 'stretch',
        fontFamily: 'openSans_regular',
        fontSize: 14,
        color: colors.radum_dark_gray,
    },
})

export default styles;