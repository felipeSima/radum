import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explorer from '../../features/explorer/presentation';
import WorkersList from '../../features/workersList/presentation';
import WorkersDetail from '../../features/workersList/workerDetail';
import Confirmation from '../../features/workersList/confirmation';
import routes from './routes';
import {navigationProps} from '../helpers/navigationOptions';

const ExplorerStack = createStackNavigator();

export default function ExplorerStackScreen() {
    return (
      <ExplorerStack.Navigator headerShown = {false} screenOptions = {navigationProps}>
        <ExplorerStack.Screen 
            name = {routes.workersList}
            component = {WorkersList} 
            options = {{ 
                title: 'Explorar',
                headerShown: false
            }
        }/>
          <ExplorerStack.Screen 
            name = {routes.workerDetail} 
            component = {WorkersDetail} 
            options = {{ 
                title: 'Workers Detail',
                headerShown: true
            }
        }/>
          <ExplorerStack.Screen 
            name = {routes.confirmation} 
            component = {Confirmation} 
            options = {{ 
                title: 'Workers Detail',
                headerShown: false
            }
        }/>
      </ExplorerStack.Navigator>
    );
  }