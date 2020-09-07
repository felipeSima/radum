import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Forum from '../../features/forum/presentation';
import {navigationProps} from '../helpers/navigationOptions';

const ForumStack = createStackNavigator();
  
export default function ForumStackScreen() {
    return (
      <ForumStack.Navigator  headerShown = {false} screenOptions = {navigationProps}>
        <ForumStack.Screen 
            name = "MainStack" 
            component = {Forum} 
            options = {{ 
                title: 'Home',
                headerShown: false
            }
        }/>
      </ForumStack.Navigator>
    );
  }