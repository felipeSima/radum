import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewRecord from '../../features/new_record';
import HomeStackScreen from './HomeStack';

const RootStack = createStackNavigator();
  
export default function RootStackScreen() {
    return (
      <RootStack.Navigator mode = 'modal' headerShown = {false}>
        <RootStack.Screen 
            name = "MainStack" 
            component = {HomeStackScreen} 
            options = {{ 
                title: 'Gaivota',
                headerShown: false
            }
        }/>
      </RootStack.Navigator>
    );
  }