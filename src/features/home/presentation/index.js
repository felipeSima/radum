import React, {useState, useEffect}from 'react';
import {View,Text, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {servicesList} from '../../../core/helpers';

function Home() {

    const Services = ({ title, image }) => (
    <View style={styles.services_container}>
        <Image style={styles.services_image} source={require('../../../../assets/icons/loading.png')}/>
        <Text style={styles.services_title}>{title}</Text>
    </View>
    );

    const renderServices = ({ item }) => (
        <Services title={item.title, item.image} />
    );


    return(
        <SafeAreaView style ={styles.container}>
                <View style ={styles.user_container}>
                    <Text style={styles.user_title}>Olá Karen</Text>
                    <Text style={styles.user_address}>Avenida das Cerejeiras, 1040</Text>
                </View>
                <ScrollView style={{flex:1,}}>
                    <Text style={styles.title}>Serviços</Text>
                    <FlatList
                        data={servicesList}
                        horizontal={true}
                        renderItem={renderServices}
                        keyExtractor={item => item.id}
                    />
                    <Text style={styles.title}>Recomendados</Text>
                    <View style={styles.recomended_work_container}>
                        <TouchableOpacity style={styles.work_button} onPress={() => {}}>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.work_button} onPress={() => {}}>
                            
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Home;