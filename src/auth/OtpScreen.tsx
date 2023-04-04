import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { useLoginMutation } from './authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';

export default function OtpScreen(): JSX.Element {

  const [otp, setOtp] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  const handleOtp = async() => {
    try {
      const { accessToken, refreshToken } = await login({phoneNumber:'1234567890', otp:otp, password:null}).unwrap()
      //console.log(accessToken)
      dispatch(setCredentials({ accessToken }))
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

  // useEffect(() => {
  //   otpRef.current.focus()
  // }, [])

  // useEffect(() => {
  //   setErrMsg('');
  // }, [otp])

  return (
    <View style={styles.container}>
      {errMsg && <Text>{errMsg}</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Text style={styles.title}>Welcome to OTP screen</Text>
      <Input
        placeholder='OTP'
        keyboardType='phone-pad'
        // ref={otpRef}
        value={otp}
        onChangeText={setOtp}
      />
      <Button
        title='Submit'
        onPress={handleOtp}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});


