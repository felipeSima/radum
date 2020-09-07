import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../features/profile/presentation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colors} from '../themes/index';
import routes from './routes';
import HomeStack from './HomeStack';
import ExplorerStack from './ExplorerStack';
import RequestStack from './RequestStack';
import ForumStack from './ForumStack';

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
      } else if (route.name === routes.requests) {
        iconName = focused
        ? 'file-document-box-multiple'
        : 'file-document-box-multiple-outline';
      } else if (route.name === routes.forum) {
        iconName = focused
        ? 'forum'
        : 'forum-outline';
      }
      
      else if (route.name === routes.profile) {
        iconName = focused
        ? 'account-box'
        : 'account-box-outline';
      }
      return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
        },
      })}
  >
        <Tab.Screen name={routes.home} component={HomeStack} />
        <Tab.Screen name={routes.explorer} component={ExplorerStack} />
        <Tab.Screen name={routes.requests} component={RequestStack} />
        <Tab.Screen name={routes.forum} component={ForumStack} />
        <Tab.Screen name={routes.profile} component={Profile} />
     </Tab.Navigator>
  );
}