import React, {useState, useEffect}from 'react';
import {View,Text, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {servicesList, mainList} from '../../../core/helpers';

function Home() {

    const Services = ({ title, image }) => (
    <View style={styles.services_container}>
        <Image style={styles.services_image} source={image}/>
        <Text style={styles.services_title}>{title}</Text>
    </View>
    );

    const Works = ({image}) => (
        <View style={styles.recomended_work_container}>
            <Image style = {styles.work_button} source = {image}/>
        </View>
    )

    
    const renderMainItem = ({item}) => {
        if(item.type ==='row'){
            return(
                <FlatList
                    data={item.data}
                    horizontal={true}
                    renderItem={renderServices}
                    keyExtractor={item => item.id}
                />
            );
        }
        if(item.type ==='list'){
            return(
                <FlatList
                    data={item.data}
                    numColumns={2}
                    renderItem={renderWorks}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={<Text style={styles.title}>Serviços recomendados a você</Text>}
                />
            );
        }
    }

    const renderServices = ({ item }) => (
        <Services title={item.title} image={item.image} />
    );

    const renderWorks = ({ item }) => (
        <Works image={item.image} />
    );


    return(
        <SafeAreaView style ={styles.container}>
                <View style ={styles.user_container}>
                    <Text style={styles.user_title}>Olá <Text style={{color: colors.radum_orange}}>Karen</Text></Text>
                    <Text style={styles.user_address}>Avenida das Cerejeiras, 1040</Text>
                </View>
                <FlatList
                    data={mainList}
                    renderItem={renderMainItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={<Text style={styles.title}>Categorias de Serviço</Text>}
                />
        </SafeAreaView>
    )
}

export default Home;