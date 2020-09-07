import React, {useState, useEffect}from 'react';
import {View,Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import {colors} from '../../../core/themes';
import {workResultList, workerProfileList} from '../../../core/helpers';

function Requests() {
    const [isPrevious, setIsPrevious] = useState(false);

    function handleToggleButton(){
        setIsPrevious(true)
    }

    function ToggleButton({title, buttonStyle, buttonTextStyle}){
        return(
            <TouchableOpacity style={buttonStyle} onPress={() => {handleToggleButton}}>
                <Text style={buttonTextStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }

    function InProgressButton(){
        return(
            <ToggleButton title={"Em andamento"} buttonStyle={!isPrevious ? styles.toggle_button_focused : styles.toggle_button} buttonTextStyle={!isPrevious ? styles.toggle_button_text_focused : styles.toggle_button_text}/>
        );
    }

    function PreviousButton(){
        return(
            <ToggleButton title={"Anteriores"} buttonStyle={isPrevious ? styles.toggle_button_focused : styles.toggle_button} buttonTextStyle={isPrevious ? styles.toggle_button_text_focused : styles.toggle_button_text}/>
        );
    }

    function ToggleButtonContainer(){
        return(
            <View style ={styles.toggle_button_container}>
                <InProgressButton/>
                <View style={styles.vertical_separator}/>
                <PreviousButton/>
            </View>
        );
    }

    function ServiceRequestItem({name,role, image}) {
       return(
            <View style ={styles.service_request_item_container}>
                <View style ={styles.first_row}>
                    <Image style ={styles.avatar_image} source={image}/>
                    <View style ={styles.info_container}>
                        <View style={styles.info_container_first_row}>
                            <Text style={styles.title}>{role}</Text>
                            <Text style={styles.sub_title}>#4562</Text>
                        </View>
                        <Text style={styles.body}>{name}</Text>
                        <Text style={styles.body}>Aguardando Pagamento</Text>
                        <View style={styles.progress_container}>
                            <View style={styles.progress_step_completed}/>
                            <View style={styles.horizontal_separator}/>
                            <View style={styles.progress_step_completed}/>
                            <View style={styles.horizontal_separator}/>
                            <View style={styles.progress_step_uncompleted}/>
                            <View style={styles.horizontal_separator}/>
                            <View style={styles.progress_step_uncompleted}/>
                        </View>
                    </View>
                </View>
            </View>
       );
    }

    const renderServiceRequests = ({ item }) => (
        <ServiceRequestItem name={item.name} role={item.role} image={item.image}/>
    );

    function ServiceRequestList(){
        return(
            <FlatList
                data={workerProfileList}
                renderItem={renderServiceRequests}
                keyExtractor={item => item.id}
                ListHeaderComponent={<ToggleButtonContainer/>}
            />
        );
    }

    return(
        <View style ={styles.container}>
            <Text style ={styles.title}>Pedidos</Text>
            <ServiceRequestList/>
        </View>
    )
}

export default Requests;