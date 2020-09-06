import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes';

const styles = StyleSheet.create({
    container: { 
        flex:1,
        alignItems: 'center',
    },
    iconLogo: { 
        marginTop: 120,
        width: 211,
        height: 214,
        backgroundColor: colors.radum_pink,
        margin:20,
    },
    buttonsContainer: {
        width:'100%',
        position: 'absolute',
        bottom: 50,
    },
    primaryButton: {
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: colors.radum_orange,
        height: 48,
        marginTop: 10,
        textDecorationColor: colors.radum_pink,
    },
    secundaryButton: {
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth: 1,
        color: colors.radum_orange,
        borderColor: colors.radum_orange,
        height: 48,
        marginTop: 10,
    },
    primaryTextColor: {
        fontFamily: 'openSans_regular',
        fontSize: 18,
        color: colors.radum_white,
    },
    secundaryTextColor: {
        fontFamily: 'openSans_regular',
        fontSize: 18,
        color: colors.radum_orange,
    },
    caption: {
        marginTop:10,
        fontFamily: 'openSans_regular',
        fontSize: 12,
        color: colors.radum_orange
    }
})

export default styles;