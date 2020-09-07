import React, {useState, useEffect}from 'react';
import {View,Text, StatusBar, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Alert} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import routes from '../../../core/navigation/routes';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

function WorkDetail({route}) {
    const workerDetails = route.params.details
    const [problem, setProblem] = useState('')
    const AppStack = useNavigation();
    
    function Confimation(){
      Alert.alert(
        'Atenção',
        'Você tem certeza que gostaria de confirma essa solicitação de serviço?',
        [
            {text: 'Confirmar Solicitação', onPress: () => AppStack.navigate(routes.confirmation)},
            {text: 'Cancelar', onPress: () => AppStack.goBack()},
        ],
        { cancelable: true }
    )
    }

    function Button(){
        return (
            <TouchableOpacity style ={styles.button_container} onPress = {() => {Confimation()}}>
                <Text style={styles.title}>Solicitar Orçamento</Text>
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

    function ServicesAvailable(){
     return(
       <View style={{marginTop:20}}>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}} onPress={() =>{}}>
              <Text style={styles.sub_title_black}>{workerDetails.tagList[0].tag}</Text>
              <FontAwesome name="check" size={14} color={colors.radum_orange} />
          </TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity onPress={() =>{}}>
              <Text style={styles.sub_title_black}>{workerDetails.tagList[1].tag}</Text>
          </TouchableOpacity>
          <View style={styles.separator}/>
       </View>
     ); 
    }

    function ServiceInfo(){
      return(
          <View style={styles.service_info}>
              <Text style={styles.bloc_text}>{workerDetails.finishedServices} <Text style={styles.bloc_text_caption}>Atendimentos prestados</Text></Text>
              <Text style={styles.bloc_text}>{workerDetails.price} <Text style={styles.bloc_text_caption}>Por Hora</Text> </Text>
              <Text style={styles.bloc_text}>{workerDetails.location}<Text style={styles.bloc_text_caption}> Localização</Text></Text>
          </View>
      );
    }

    function Tags({tag}){
      return(
        <View style={styles.tag}>
            <Text style={styles.tag_text}>{tag}</Text>
        </View>
      );}
  
    const renderWorkerTags = ({ item }) => (
      <Tags tag={item.tag}/>
    );  
  
    function WorkersTagsList({tagList}){
      return(
        <FlatList
          data={tagList}
          horizontal={true}
          renderItem={renderWorkerTags}
          keyExtractor={item => item.id}
        />
      )
    }

    return(
        <View style ={styles.container}>
          <ScrollView>
            <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
              <View style ={styles.first_row}>
                  <Image style ={styles.avatar_image} source={workerDetails.image}/>
                  <View style ={styles.info_container}>
                      <View style={styles.info_container_first_row}>
                          <Text style={styles.title_black}>{workerDetails.name}</Text>
                          <View style={styles.rating}>
                            <Text style={styles.text_rating}>{workerDetails.rate}</Text>
                            <FontAwesome name="star" size={12} color={colors.radum_pink} />
                          </View>
                      </View>
                      <Text style={styles.body}>{workerDetails.role}</Text>
                  </View>
              </View>
              <View style ={styles.second_row}>
                <WorkersTagsList tagList={workerDetails.tagList}/>
              </View>
              <View style={styles.separator}/>
              <Text style={styles.sub_title_black}>{workerDetails.bio}</Text>
              <ServiceInfo />
              <ServicesAvailable />
              <TextInput 
                style = {styles.input_container} 
                placeholder = 'Qual o seu problema ?' 
                placeholderTextColor = {colors.radum_dark_gray}
                multiline = {true}
                blurOnSubmit = {true}
                onChangeText = {problem => setProblem(problem)}
                defaultValue = {problem}
              />
              <Button/>
          </ScrollView>
        </View>
    )
}

export default WorkDetail;