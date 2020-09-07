import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        marginTop:20,
        marginHorizontal: 16,
    },
    title: {
        fontFamily: 'openSans_bold',
        fontSize: 18,
    },
    title_white: {
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: colors.radum_white,
    },
    sub_title: {
        fontFamily: 'openSans_light',
        fontSize: 14,
    },
    separator:{
        width: '100%',
        marginVertical:5,
        height:1,
        backgroundColor: colors.radum_light_gray,
    },
    service:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    payment_title:{
        marginTop: 20,
        fontFamily: 'openSans_bold',
        fontSize: 16,
    },
    payment_sub_title:{
        marginLeft:10,
        fontFamily: 'openSans_light',
        fontSize: 14,
    },
    payment_method:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    payment_method_container:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input_container:{
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
    button_container:{
        marginTop:20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 48,
        borderRadius:10,
        backgroundColor: colors.radum_orange,
    },
    input_in_line:{
        flexDirection:'row',
        alignItems:'stretch',
        marginVertical: 20,
    },
    input_container_side:{
        flex:1,
        paddingLeft:10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.radum_light_gray,
        height: 48,
        alignSelf: 'stretch',
        fontFamily: 'openSans_regular',
        fontSize: 14,
        color: colors.radum_dark_gray,
    },
    space:{
        width: 10,
    }
})

export default styles;