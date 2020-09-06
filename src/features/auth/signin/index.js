import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image, KeyboardAvoidingView, Platform, View, TouchableWithoutFeedback, Keyboard, StatusBar, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../../../core/themes/index';

export default function SignIn({navigation}) {
    const [user, setUser] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [password, setPassword] = useState('');
    const NAVIGATION = useNavigation();
    const navigateToForgetPassword = () => NAVIGATION.navigate('ForgetPassword');

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {styles.root}>
            <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>
                    <View>
                        <Text style = {styles.text_input_title}>Email:</Text>
                        <TextInput 
                            style = {styles.text_input_container} 
                            placeholder = 'Seu email aqui..' 
                            placeholderTextColor = {colors.gaivota_light_gray}
                            onChangeText = {user => setUser(user)}
                            defaultValue = {user}
                        />
                        <Text style = {styles.text_input_title}>Senha:</Text>
                        <View style = {{flexDirection:'row', alignItems:'stretch', marginHorizontal:20,}}>
                            <TextInput 
                                style = {styles.password_input_container} 
                                placeholder = 'Sua senha aqui..' 
                                placeholderTextColor = {colors.gaivota_light_gray}
                                secureTextEntry = {showPassword}
                                onChangeText = {password => setPassword(password)}
                                defaultValue = {password}
                            />
                            <TouchableOpacity style = {styles.show_password_butotn} onPress = {() => {setShowPassword(!showPassword)}}>
                                <AntDesign name="eyeo" size={24} color="#1e1e1e"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style = {styles.button_container} onPress = {()=> {dispatch(AuthCreators.loggingIn({user,password}))}}>
                        <Text style = {styles.button_title}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.forget_passorword_button} onPress = {navigateToForgetPassword}>
                        <Text style = {styles.forget_passorword_button_title}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}