import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import {colors} from '../../../core/themes/index';
import { useNavigation } from '@react-navigation/native';

export default function ForgetPassword() {
    const [user, setUser] = useState('');
    const goBackToPreviousScreen = () => {
        useNavigation().goBack()
    }

    return (
    <SafeAreaView style = {styles.root}>
    <StatusBar barStyle = {'light-content'} backgroundColor = {colors.radum_orange}/>
        <Text style = {styles.text_input_title}>
            Digite seu email para procurarmos seu cadastro 
        </Text>
        <Text style = {styles.text_input_title}>Email:</Text>
        <TextInput 
            style = {styles.text_input_container} 
            placeholder = 'Seu email aqui..' 
            placeholderTextColor = {colors.radum_light_gray}
            onChangeText = {user => setUser(user)}
            defaultValue = {user}
        />
        <TouchableOpacity style = {styles.button_container} onPress = {()=> {
            dispatch(AuthCreators.forgetPassword({email:user}))
            }}>
            <Text style = {styles.button_title}>Recuperar</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}
