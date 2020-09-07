import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        margin:10,
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
        color: colors.radum_dark_gray,
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
        marginTop:20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 48,
        borderRadius:10,
        backgroundColor: colors.radum_orange,
    },
    tag:{
        backgroundColor: colors.radum_orange,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        margin:2,
    },
    tag_text:{
        fontFamily: 'openSans_regular',
        fontSize: 12,
        textAlign: 'center',
        color: colors.radum_white,
        padding:5,
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
        alignItems:'center',
    },
    rating: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_rating:{
        marginRight:5,
        fontFamily: 'openSans_light',
        fontSize: 12,
        textAlign: 'right',
        color: colors.radum_pink
    },
    service_info:{
        marginTop:20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        flex:1,
    },
    service_info_second_line:{
        marginTop:20,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        flex:1,
    },
    bloc:{
        justifyContent: 'center',
    },
    bloc_text:{
        fontFamily: 'openSans_bold',
        fontSize: 14,
        textAlign: 'center',
        color: colors.radum_orange,
    },
    bloc_text_caption:{
        fontFamily: 'openSans_bold',
        fontSize: 14,
        textAlign: 'center',
        color: colors.radum_dark_gray,
    },
    input_container:{
        paddingLeft:10,
        marginTop:20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.radum_light_gray,
        height: 200,
        alignSelf: 'stretch',
        fontFamily: 'openSans_light',
        fontSize: 16,
        color: colors.radum_dark_gray,
    }
})

export default styles;