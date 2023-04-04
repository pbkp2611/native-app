import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { selectOtpStatus } from './authSlice';
import { selectPasswordStatus } from './authSlice';

import StartScreen from './StartScreen';
import PhoneScreen from './PhoneScreen';
import ForgotScreen from './ForgetScreen';
import OtpScreen from './OtpScreen';
import PasswordScreen from './PasswordScreen';


type RootStackParamList = {
  Start: undefined;
  Phone: undefined;
  Forgot:undefined;
  Otp:undefined;
  Password:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function LoginRoutes(): JSX.Element {
  const otpState = useSelector(selectOtpStatus)
  const passwordState = useSelector(selectPasswordStatus)

  return (
    <Stack.Navigator initialRouteName="Start">
      {
        !passwordState && !otpState
        ?
        <>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Phone" component={PhoneScreen} />
        </>
        :
          passwordState
          ?
          <>
            <Stack.Screen name="Password" component={PasswordScreen} />
            <Stack.Screen name="Forgot" component={ForgotScreen} />
          </>
          :
          <Stack.Screen name="Otp" component={OtpScreen} />
      }
      
    </Stack.Navigator>
  );
}

export default LoginRoutes