import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        marginTop:40,
        marginHorizontal:16,
    },
    title: {
        textAlign: 'center',
        fontFamily: 'openSans_bold',
        fontSize: 18,
    },
    sub_title: {
        fontFamily: 'openSans_light',
        fontSize: 14,
        textAlign: 'right',
    },
    body: {
        fontFamily: 'openSans_light',
        fontSize: 14,
    },
    toggle_button_container: {
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        marginVertical: 20,
    },
    toggle_button: {
        marginTop:10,
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: colors.radum_light_gray,
    },
    toggle_button_text_focused: {
        textAlign: 'center',
        marginBottom: 10,
        color: colors.radum_orange,
    },
    toggle_button_focused: {
        marginTop:10,
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: colors.radum_orange,
    },
    toggle_button_text: {
        textAlign: 'center',
        marginBottom: 10,
        color: colors.radum_subtitle,
    },
    vertical_separator:{
        height:'80%',
        margin:5,
        width:1,
        backgroundColor: colors.radum_light_gray,
    },
    service_request_item_container:{
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.radum_light_gray,
        padding:10,
        marginVertical:5,
    },
    first_row:{
        flexDirection:'row',
        flex:1,
        alignItems: 'stretch',
    },
    avatar_image: {
        width: 70,
        height: 70,
        borderRadius:40,
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
    progress_container:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    progress_step_completed:{
        width:16,
        height:16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.radum_light_gray,
        backgroundColor:'green',
    },
    progress_step_uncompleted:{
        width:16,
        height:16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.radum_light_gray,
    },
    horizontal_separator:{
        height:1,
        width:10,
        backgroundColor: colors.radum_light_gray,
    },


})

export default styles;