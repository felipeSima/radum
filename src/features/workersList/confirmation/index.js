import React, {useState, useEffect}from 'react';
import {View,Text, StatusBar, Image, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import routes from '../../../core/navigation/routes';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

function Confirmation({route}) {
    const AppStack = useNavigation();

    function ButtonConfirmation(){
        return (
            <TouchableOpacity style ={styles.button_container} onPress = {() => {AppStack.navigate(routes.requests)}}>
                <Text style={styles.button_title}>Ir para pedidos</Text>
            </TouchableOpacity>
        );
    }

    function ButtonExplorer(){
      return (
          <TouchableOpacity style ={styles.button_container} onPress = {() => {AppStack.navigate(routes.explorer)}}>
              <Text style={styles.button_title}>Continuar explorando</Text>
          </TouchableOpacity>
      );
  }

    return(
        <View style ={styles.container}>
          <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
          <Text style ={styles.title}>Sucesso</Text>
          <Text style={styles.sub_title}>Acompanhe seus pedidos na aba de pedidos.</Text>
          <ButtonConfirmation/>
          <ButtonExplorer/>
        </View>
    )
}

export default Confirmation;