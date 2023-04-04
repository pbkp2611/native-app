import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './src/auth/authSlice';

import AuthRoutes from './src/maintabs/MainTabs';
import LoginRoutes from './src/auth/LoginRoutes';

type RootStackParamList = {
  LoginRoutes:undefined;
  AuthRoutes:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppRoutes(): JSX.Element {
  const authToken = useSelector(selectCurrentToken)
  //console.log(`auth token ${authToken}`)
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {
      !authToken
      ?
      <Stack.Screen name="LoginRoutes" component={LoginRoutes} options={{ headerShown: false }} />
      :
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} options={{ headerShown: false }} />
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes