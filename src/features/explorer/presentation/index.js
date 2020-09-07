import React, {useState, useEffect}from 'react';
import {View,Text, TouchableOpacity, FlatList, TextInput, Image} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {workResultList} from '../../../core/helpers';

function Explorer() {
    const [searchText, setSearchText] = useState('');
    const servicesList = workResultList;
    var [tempList, setTempList] = useState(workResultList);


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


    const Services = ({title, image}) => (
        <View style={styles.recomended_work_container}>
            <Image style={styles.services_image} source={image}/>
            <Text style={styles.services_title}>{title}</Text>
        </View>
    )

    const renderServices = ({ item }) => (
        <Services title = {item.title} image={item.image} />
    );

    return(
        <View style ={styles.container}>
            <SearchField/>
            <FlatList
                data={tempList}
                numColumns={3}
                renderItem={renderServices}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Text style={styles.title}>Serviços recomendados a você</Text>}
            />
        </View>
    )
}

export default Explorer;