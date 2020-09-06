import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../features/home/presentation';
import Explorer from '../../features/explorer/presentation';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colors} from '../themes/index';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function TabStackScreen() {

  return (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.radum_orange,
      inactiveTintColor: 'gray',
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === routes.home) {
        iconName = focused
        ? 'home'
        : 'home-outline';
      } else if (route.name === routes.explorer) {
        iconName = focused
        ? 'account-search'
        : 'account-search-outline';
      }
      
      return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
        },
      })}
  >
        <Tab.Screen name={routes.home} component={Home} />
        <Tab.Screen name={routes.explorer} component={Explorer} />
     </Tab.Navigator>
  );
}