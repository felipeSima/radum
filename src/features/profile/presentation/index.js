import React, {useState, useEffect}from 'react';
import {View,Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {userProfile} from '../../../core/helpers';

function Profile() {

    function Button(){
        return (
            <TouchableOpacity style ={styles.button_container} onPress = {() => {}}>
                <Text style={styles.title}>Alterar</Text>
            </TouchableOpacity>
        );
    }

    function UserInfoInput({text}) {
        return(
            <TextInput 
                style={styles.text_input_container}
                placeholder='O que você esta procurando?'
                placeholderTextColor = {colors.radum_light_gray}
                defaultValue={text}
            />
        );
    }

    return(
        <View style ={styles.container}>
            <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
            <View style={styles.profile_header}>
                <View style={styles.profile}>
                <Image style ={styles.avatar_image} source={userProfile.image}/>
                    <View style ={styles.info_container}>
                            <Text style={styles.sub_title}>{userProfile.name}</Text>
                        <Text style={styles.title}><Text style={styles.body}>Nível </Text>{userProfile.level}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.lower_container}>
                <Text style={styles.sub_title_black}>Telefone</Text>
                <UserInfoInput text={"(11) 94673-2936"}/>
                <Text style={styles.sub_title_black}>Email</Text>
                <UserInfoInput text={"c_ferreira@gmail.com"}/>
                <Text style={styles.sub_title_black}>CPF</Text>
                <UserInfoInput text={"100.XXX.XXX-76"}/>
                <Text style={styles.sub_title_black}>Endereço</Text>
                <UserInfoInput text={"Avenida das Cerejeiras, 1040"}/>
                <Button/>
            </View>
        </View>
    )
}

export default Profile;