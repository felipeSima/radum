import React from 'react';
import {colors} from '../themes/index';
import { createStackNavigator } from '@react-navigation/stack';

const navigationProps = {
    headerShown:true,
    headerStyle: { backgroundColor: colors.gaivota_dark_cyan_blue },
    headerTintColor: colors.gaivota_white,
    headerBackTitle: ' ',
    headerTitleStyle: { 
        fontFamily: 'openSans_regular',
        fontSize: 20,
    }
};

const MainStack = createStackNavigator()

export default function HomeStackScreen() {
    return (
        <MainStack.Navigator screenOptions = {navigationProps}>
          <MainStack.Screen 
                name = "ModuleSelection" 
                component = {ModuleSection} 
                options = {({ navigation }) => ({
                    title: 'Gaivota',
                })
            }/>
            <MainStack.Screen 
                name = "SampleList" 
                component = {SampleList} 
                options = {({ navigation }) => ({
                    title: 'Amostras',
                })
            }/>
        </MainStack.Navigator>
    )
}