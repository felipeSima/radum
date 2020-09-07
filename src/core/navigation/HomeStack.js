import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../features/home/presentation';
import WorkersList from '../../features/workersList/presentation';
import WorkersDetail from '../../features/workersList/workerDetail';
import {navigationProps} from '../helpers/navigationOptions';
import routes from './routes.js';

const HomeStack = createStackNavigator();
  
export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator headerShown = {false} screenOptions = {navigationProps}>
        <HomeStack.Screen 
            name = {routes.home}
            component = {Home} 
            options = {{ 
                title: 'Inicio',
                headerShown: false
            }
        }/>
          <HomeStack.Screen 
            name = {routes.workersList}
            component = {WorkersList} 
            options = {{ 
                title: 'Prestadores de Serviço',
                headerShown: true
            }
        }/>
          <HomeStack.Screen 
            name = {routes.workerDetail}
            component = {WorkersDetail} 
            options = {{ 
                title: 'Detalhes do prestador',
                headerShown: true
            }
        }/>
      </HomeStack.Navigator>
    );
  }