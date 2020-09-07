import React, {useState, useEffect}from 'react';
import {View,Text, TouchableOpacity, FlatList, Image, TextInput, StatusBar} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {workResultList, workerProfileList} from '../../../core/helpers';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import routes from '../../../core/navigation/routes';


function Requests() {
  const [searchText, setSearchText] = useState('');
  const servicesList = workResultList;
  var [tempList, setTempList] = useState(workResultList);
  const AppStack = useNavigation()

  function goToWorkerDetails(details){
    AppStack.navigate(routes.workerDetail,{details})
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

  function ServiceRequestItem({workerDetails, name,role, image, tagList}) {
       return(
          <TouchableOpacity style ={styles.service_request_item_container} onPress = {() => {goToWorkerDetails(workerDetails)}}>
            <View style ={styles.first_row}>
                <Image style ={styles.avatar_image} source={image}/>
                <View style ={styles.info_container}>
                    <View style={styles.info_container_first_row}>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.rating}>
                          <Text style={styles.text_rating}>{workerDetails.rate}</Text>
                          <FontAwesome name="star" size={12} color={colors.radum_pink} />
                        </View>
                    </View>
                    <Text style={styles.body}>{role}</Text>
                </View>
            </View>
            <View style ={styles.second_row}>
              <WorkersTagsList tagList={tagList}/>
            </View>
          </TouchableOpacity>
       );
    }

    const searchFilter = text => {
      if (text == ''){
          setTempList(workResultList);
      }else{
        const newData = servicesList.filter( item => {
          return (
            item.title.toLowerCase().includes(text.toLowerCase()) ||
            item.tag.toLowerCase().includes(text.toLowerCase()) )
        })
        setTempList(newData)
      }
    }

  function SearchField() {
  
      return(
        <View>
          <TextInput 
            style={styles.text_input_container}
            placeholder='O que você esta procurando?'
            placeholderTextColor = {colors.radum_light_gray}
            onChangeText={text => {
              if(text == ''){
                setSearchText(text)
                searchFilter(text)
              }}}
            onSubmitEditing={(event) => {
                setSearchText(event.nativeEvent.text)
                searchFilter(event.nativeEvent.text)
              }} 
            defaultValue={searchText}
          />  
        </View>
      )
    }


    const renderServiceRequests = ({ item }) => (
        <ServiceRequestItem workerDetails={item} name={item.name} role={item.role} image={item.image} tagList={item.tagList}/>
    );

    function ServiceRequestList(){
        return(
            <FlatList
                data={workerProfileList}
                renderItem={renderServiceRequests}
                keyExtractor={item => item.id}
                ListHeaderComponent={<SearchField/>}
            />
        );
    }

    return(
        <View style ={styles.container}>
          <StatusBar barStyle = {Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor = {colors.radum_orange}/>
            <ServiceRequestList/>
        </View>
    )
}

export default Requests;