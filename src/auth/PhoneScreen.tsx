import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { usePhoneMutation } from './authApiSlice'
import { useDispatch } from 'react-redux'
import { setAuthState } from './authSlice';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Start: undefined;
  Phone: undefined;
  Password:undefined;
  Otp:undefined;
  Profile: {phone: string};
};
type PhoneProps = NativeStackScreenProps<RootStackParamList, 'Phone'>;


function PhoneScreen({ navigation }:PhoneProps): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errMsg, setErrMsg] = useState('')
  //const phoneRef = useRef<TextInput>()
  const dispatch = useDispatch()

  const [phone, { isLoading }] = usePhoneMutation()

  const handlePhone = async() => {
    try {
      const { phoneResponse } = await phone(phoneNumber).unwrap()
      console.log(phoneResponse)
      dispatch(setAuthState(phoneResponse))
      //dispatch phone number, isPasswordSet, isOtpsent, message
      //navigation.navigate('Otp')
    } catch (err:any) {
      console.log(err)
      if (!err.status) {
          setErrMsg('No Server Response');
      } else if (err.status === 400) {
          setErrMsg('Missing Phone number');
      } else if (err.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg(err.data?.message);
      }
      //phoneRef.current.focus();
    }
  };

  useEffect(() => {
    //phoneRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [phoneNumber])

  return (
    <View style={{ padding: 20 }}>
      {errMsg && <Text>{errMsg}</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Input
        placeholder='Phone Number'
        keyboardType='phone-pad'
        // ref={phoneRef}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Button
        title='Next'
        onPress={handlePhone}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default PhoneScreen;
