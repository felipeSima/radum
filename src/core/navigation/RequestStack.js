import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Requests from '../../features/requests/presentation';
import PaymentPage from '../../features/payment/presentation';
import {navigationProps} from '../helpers/navigationOptions';
import routes from './routes';

const RequestStack = createStackNavigator();
  
export default function RequestStackScreen() {
    return (
      <RequestStack.Navigator  headerShown = {false} screenOptions = {navigationProps}>
        <RequestStack.Screen 
            name = {routes.requests} 
            component = {Requests} 
            options = {{ 
                title: 'Home',
                headerShown: false
            }
        }/>
        <RequestStack.Screen 
            name = {routes.payments} 
            component = {PaymentPage} 
            options = {{ 
                title: 'Pagamentos',
                headerShown: true
            }
        }/>
      </RequestStack.Navigator>
    );
  }