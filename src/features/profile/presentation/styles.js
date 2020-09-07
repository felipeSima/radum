import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
    },
    profile_header:{
        paddingTop:40,
        padding:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor: colors.radum_orange,
    },
    lower_container:{
        marginHorizontal:16,
        flex:1,
    },
    profile: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar_image: {
        width: 70,
        height: 70,
        borderRadius:35,
    },
    info_container:{
        marginLeft:10,
        alignItems:'stretch',
        flex:1,
    },
    info_container_first_row:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title: {
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: colors.radum_white,
    },
    sub_title: {
        fontFamily: 'openSans_light',
        fontSize: 14,
        color: colors.radum_white,
    },
    body: {
        fontFamily: 'openSans_light',
        fontSize: 18,
    },
    title_black: {
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: colors.radum_dark_gray,
    },
    sub_title_black: {
        marginTop:10,
        fontFamily: 'openSans_light',
        fontSize: 16,
        color: colors.radum_dark_gray,
    },
    user_field: {
        marginTop:10,
        fontFamily: 'openSans_light',
        fontSize: 16,
        borderBottomColor:colors.radum_dark_gray,
        borderBottomWidth: 1,
        color: colors.radum_dark_gray,
    },
    body_black: {
        fontFamily: 'openSans_light',
        fontSize: 18,
        color: colors.radum_dark_gray,
    },
    separator:{
        width: '100%',
        marginVertical:10,
        height:1,
        backgroundColor: colors.radum_light_gray,
    },
    text_input_container:{
        marginTop:15,
        borderBottomWidth: 1,
        borderColor: colors.radum_light_gray,
        height: 30,
        alignSelf: 'stretch',
        fontFamily: 'openSans_regular',
        fontSize: 16,
        color: colors.radum_dark_gray,
    },
    button_container:{
        position: 'absolute',
        bottom: 20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 48,
        borderRadius:10,
        backgroundColor: colors.radum_orange,
    },
})

export default styles;