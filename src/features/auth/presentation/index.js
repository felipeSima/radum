import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles.js';
import route from '../../../core/navigation/routes';
import { useNavigation } from '@react-navigation/native';

function Auth() {
    const AppStack = useNavigation()

    const goToLogin = () => {
        AppStack.navigate(route.login)
    }
    const goToSigin = () => {
        AppStack.navigate(route.signIn)
    }
 
    const Button = ({title,buttonStyle, buttonTextStyle, action}) => {
        return(
            <TouchableOpacity style = {buttonStyle} onPress = {action}>
                <Text style = {buttonTextStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <Image style = {styles.iconLogo} source={require('../../../../assets/icons/radum_logo.jpeg')}/>
            <View style = {styles.buttonsContainer}>
                <Button 
                    title="Entrar" 
                    buttonStyle = {styles.primaryButton} 
                    buttonTextStyle = {styles.primaryTextColor} 
                    action = {goToLogin}
                />
                <Button 
                    title="Cadastrar" 
                    buttonStyle = {styles.secundaryButton} 
                    buttonTextStyle = {styles.secundaryTextColor} 
                    action = {goToSigin} 
                />
            </View>
        </View>
    )
}

export default Auth;