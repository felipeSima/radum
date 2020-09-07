import React, {useState, useEffect}from 'react';
import {View,Text, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, StatusBar} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import routes from '../../../core/navigation/routes';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

function PaymentPage() {
    const [text, setText] = useState('');
    const [checked, setChecked] = React.useState('first');
    const AppStack = useNavigation();
    
    function Confimation(){
      Alert.alert(
        'Atenção',
        'Você tem certeza que gostaria de confirma essa solicitação de serviço?',
        [
            {text: 'Confirmar Solicitação', onPress: () => AppStack.navigate(routes.confirmation)},
            {text: 'Cancelar', onPress: () => {}},
        ],
        { cancelable: true }
    )
    }

    function Button(){
        return (
            <TouchableOpacity style ={styles.button_container} onPress = {() => {Confimation()}}>
                <Text style={styles.title_white}>Solicitar Orçamento</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View style ={styles.container}>
            <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
            <ScrollView>
            <Text style ={styles.title}>Endereço</Text>
            <Text style ={styles.sub_title}>Rua alameda dos Azulejos, 4563</Text>
            <Text style ={styles.sub_title}>Vila Olimpia</Text>
            <View style ={styles.service}>
                <Text style ={styles.sub_title}>Tatuagem</Text>
                <Text style ={styles.title}>R$ 870,00</Text>
            </View>
            <View style ={styles.separator}/>
            <View style ={styles.service}>
                <Text style ={styles.sub_title}>Subtotal</Text>
                <Text style ={styles.title}>R$ 870,00</Text>
            </View>
            <View style ={styles.service}>
                <Text style ={styles.sub_title}>Taxas</Text>
                <Text style ={styles.title}>R$ 70,00</Text>
            </View>
            <View style ={styles.service}>
                <Text style ={styles.sub_title}>Total</Text>
                <Text style ={styles.title}>R$ 940,00</Text>
            </View>
            <Text style ={styles.payment_title}>Forma de Pagamento</Text>
            <View style ={styles.payment_method_container}>
                <RadioButton
                    value="first"
                    uncheckedColor={colors.radum_dark_gray}
                    color={colors.radum_orange}
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <FontAwesome name="credit-card" size={24} color="black" />
                <Text style={styles.payment_sub_title}>Cartão de crédito</Text>
            </View>
            <View style ={styles.payment_method_container}>
                <RadioButton
                    value="second"
                    uncheckedColor={colors.radum_dark_gray}
                    color={colors.radum_orange}
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <FontAwesome name="money" size={24} color="black" />
                <Text style={styles.payment_sub_title}>Dinheiro</Text>
            </View>
            <TextInput 
                style = {styles.input_container} 
                placeholder = 'Número do cartão' 
                placeholderTextColor = {colors.radum_dark_gray}
                blurOnSubmit = {true}
                onChangeText = {text => setText(text)}
                defaultValue = {text}
            />
            <TextInput 
                style = {styles.input_container} 
                placeholder = 'Nome do Titular' 
                placeholderTextColor = {colors.radum_dark_gray}
                blurOnSubmit = {true}
                onChangeText = {text => setText(text)}
                defaultValue = {text}
            />
            <View style={styles.input_in_line}>
                <TextInput 
                    style = {styles.input_container_side} 
                    placeholder = 'MM/AA' 
                    placeholderTextColor = {colors.radum_dark_gray}
                    blurOnSubmit = {true}
                    onChangeText = {text => setText(text)}
                    defaultValue = {text}
                />
                <View style={styles.space}/>
                <TextInput 
                    style = {styles.input_container_side} 
                    placeholder = 'Código de segurança' 
                    placeholderTextColor = {colors.radum_dark_gray}
                    blurOnSubmit = {true}
                    onChangeText = {text => setText(text)}
                    defaultValue = {text}
                />
            </View>
            <Button style ={styles.button_container}/>
            </ScrollView>
        </View>
    )
}

export default PaymentPage;