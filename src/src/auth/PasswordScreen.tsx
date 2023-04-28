import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { useLoginMutation } from './authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';

type RootStackParamList = {
  Password:undefined;
  Forgot:undefined;
};

type PasswordProps = NativeStackScreenProps<RootStackParamList, 'Password'>;

function PasswordScreen({ navigation }:PasswordProps): JSX.Element {

  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  const handlePassword = async() => {
    try {
      const { accessToken, refreshToken } = await login({phoneNumber:'1234567890', otp:null, password:password}).unwrap()
      //console.log(accessToken)
      dispatch(setCredentials({ accessToken, refreshToken }))
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your password</Text>
      {errMsg && <Text>{errMsg}</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Input
        secureTextEntry={true}
        placeholder='password'
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title='Submit'
        onPress={handlePassword}
        style={{ marginTop: 20 }}
      />
      <Button
        title="Forget"
        onPress={() => navigation.navigate('Forgot')}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default PasswordScreen
