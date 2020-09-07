import React, {useState, useEffect}from 'react';
import {View,Text, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {workerProfileList, mainList} from '../../../core/helpers';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../core/navigation/routes';

function Home() {
    const AppStack = useNavigation();
    const workerDetails = workerProfileList;

    function goToWorkerDetails(details){
        AppStack.navigate(routes.workerDetail,{details})
      }

    const Services = ({ title, image }) => (
    <TouchableOpacity style={styles.services_container} onPress = {() => {AppStack.navigate(routes.workersList)}}>
        <Image style={styles.services_image} source={image}/>
        <Text style={styles.services_title}>{title}</Text>
    </TouchableOpacity>
    );

    const Works = ({image, details}) => (
        <TouchableOpacity style={styles.recomended_work_container} onPress = {() => {goToWorkerDetails(details)}}>
            <Image style = {styles.work_button} source = {image}/>
        </TouchableOpacity>
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
        <Works image={item.service_image} details = {item} />
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