import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes/index';

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        justifyContent: 'center'
    },
    icon_logo:{
        alignSelf: 'center',
        marginTop: 100,
        width:190,
        height:150,
        marginBottom:30,
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
    password_input_container:{
        width:'93%',
        borderBottomWidth: 1,
        borderBottomColor: colors.radum_light_gray,
        height: 48,
        alignSelf: 'stretch',
        fontFamily: 'openSans_regular',
        fontSize: 18,
        color: colors.radum_dark_gray,
    },
    password_container:{
        flexDirection:'row',
        backgroundColor:'red',
    },
    show_password_butotn:{
        alignSelf: 'flex-end',
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
    forget_passorword_button:{
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    forget_passorword_button_title:{
        fontFamily: 'openSans_bold',
        fontSize: 18,
        color: colors.radum_orange,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
});

export default styles;