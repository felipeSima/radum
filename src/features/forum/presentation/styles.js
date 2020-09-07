import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        marginTop:40,
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
    header_title: {
        textAlign: 'center',
        fontFamily: 'openSans_bold',
        fontSize: 18,
    },
    title: {
        marginTop:15,
        textAlign: 'center',
        fontFamily: 'openSans_bold',
        fontSize: 24,
        color: colors.radum_dark_gray,
    },
    sub_title: {
        marginTop:5,
        textAlign: 'center',
        fontFamily: 'openSans_light',
        fontSize: 18,
        color: colors.radum_dark_gray,
    },
    icon: {
        marginTop: 20,
        width:'100%',
        height:200,
        borderRadius:10,
    },
    forum_item_container: {
        marginTop:20,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.radum_light_gray,
        padding:10,
        marginVertical:5,
    },
    tag_container:{
        borderRadius:5,
        backgroundColor: colors.radum_pink,
    },
    tag: {
        textAlign: 'center',
        padding:5,
        color: colors.radum_white
    },
    forum_tag_title: {
        marginTop: 10,
        fontFamily: 'openSans_regular',
        fontSize: 14,
    },
    forum_tag_sub_title: {
        marginTop: 10,
        fontFamily: 'openSans_light',
        fontSize: 14,
    },
    forum_answer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;