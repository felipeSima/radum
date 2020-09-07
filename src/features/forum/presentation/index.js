import React, {useState, useEffect}from 'react';
import {View,Text, Image, ScrollView, TextInput, FlatList, StatusBar} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import { MaterialIcons } from '@expo/vector-icons';
import {forumQuestions} from '../../../core/helpers';

function Forum() {
    const [search, setSearch] = useState("")


    function ForumItem({tag,question, answer}) {
        return(
             <View style ={styles.forum_item_container}>
                 <View style ={styles.tag_container}>
                    <Text style={styles.tag}>{tag}</Text>
                 </View>
                 <Text style={styles.forum_tag_title}>
                     {question}
                 </Text>
                 <View style={styles.forum_answer}>
                    <MaterialIcons name="subdirectory-arrow-right" size={24} color={colors.radum_pink} />
                    <Text style={styles.forum_tag_sub_title}>
                        {answer}
                    </Text>
                 </View>
                 

             </View>
        );
     }

     const renderForumQuestions = ({ item }) => (
        <ForumItem tag={item.tag} question={item.question} answer={item.answer}/>
    );

    function ForumHeader(){
        return (
            <View>
                <Text style={styles.header_title}>Fórum</Text>
                <TextInput 
                    style = {styles.text_input_container} 
                    placeholder = 'Qual a sua dúvida?' 
                    placeholderTextColor = {colors.radum_light_gray}
                    onChangeText = {search => setSearch(search)}
                    defaultValue = {search}
                />
                <Text style={styles.title}>Seja bem-vinda ao fórum da Ratum </Text>
                <Text style={styles.sub_title}>Venha ver se sua dúvida já não está respondida aqui ou crie uma nova!</Text>
                <Image style={styles.icon} source={require("../../../../assets/images/forum.jpg")}/>
            </View>
        )
    }

    function ForumQuestionList(){
        return(
            <FlatList
                data={forumQuestions}
                renderItem={renderForumQuestions}
                keyExtractor={item => item.id}
                ListHeaderComponent={<ForumHeader/>}
            />
        );
    }

    return(
        <View style ={styles.container}>
            <StatusBar barStyle = {Platform.OS === 'ios' ? 'dark-content' : 'dark-content'} backgroundColor = {colors.radum_orange}/>
            <ForumQuestionList/>
        </View>
    )
}

export default Forum;