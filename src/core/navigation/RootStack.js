import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../features/home/presentation';

const RootStack = createStackNavigator();
  
export default function RootStackScreen() {
    return (
      <RootStack.Navigator mode = 'modal' headerShown = {false}>
        <RootStack.Screen 
            name = "MainStack" 
            component = {Home} 
            options = {{ 
                title: 'Home',
                headerShown: false
            }
        }/>
      </RootStack.Navigator>
    );
  }