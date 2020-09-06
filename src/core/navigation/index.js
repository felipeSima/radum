import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackScreen from './AuthStack';
import colors from '../themes/colors';

export default function Routes() {
  return(
      <NavigationContainer>
          <StatusBar backgroundColor = {colors.radum_orange}/>
            <AuthStackScreen/>
      </NavigationContainer>
  );
}
