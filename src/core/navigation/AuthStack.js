import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../../features/auth/presentation';
import Login from '../../features/auth/login';
import SignIn from '../../features/auth/signin';
import ForgetPassword from '../../features/auth/resetPassword';
import {colors} from '../themes/index';
import route from './routes';

const navigationProps = {
    headerShown:true,
    headerStyle: { backgroundColor: colors.radum_orange },
    headerTintColor: colors.radum_white,
    headerBackTitle: ' ',
    headerTitleStyle: { 
        fontFamily: 'openSans_regular',
        fontSize: 20,
    }
};

const AuthStack = createStackNavigator()

export default function AuthStackScreen() {
    return (
        <AuthStack.Navigator screenOptions = {navigationProps}>
            <AuthStack.Screen 
                name = {route.authHome}
                component = {Auth} 
                options = {{ 
                    title: 'Auth',
                    headerShown: false,
                }
            }/>
            <AuthStack.Screen 
                name = {route.login}
                component = {Login} 
                options = {{ 
                    title: 'Login',
                    headerShown: true,
                }
            }/>
            <AuthStack.Screen 
                name = {route.signIn}
                component = {SignIn} 
                options = {{ 
                    title: 'Sign In',
                    headerShown: true,
                }
            }/>
            <AuthStack.Screen 
                name = {route.forgetPassword}
                component = {ForgetPassword} 
                options = {{ 
                    title: 'Forgot Password',
                    headerShown: true,
                }
            }/>
        </AuthStack.Navigator>
    )
}