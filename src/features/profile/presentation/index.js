import React, {useState, useEffect}from 'react';
import {View,Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';

function Profile() {
    const [search, setSearch] = useState("")


    return(
        <View style ={styles.container}>
            <TextInput 
                style = {styles.text_input_container} 
                placeholder = 'PROFILE' 
                placeholderTextColor = {colors.radum_light_gray}
                onChangeText = {search => setSearch(search)}
                defaultValue = {search}
            />
        </View>
    )
}

export default Profile;