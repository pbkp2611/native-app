import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { selectOtpStatus } from './authSlice';

export default function OtpScreen() {

  const opt = useSelector(selectOtpStatus)
  console.log(opt)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OTP screen {opt}</Text>
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
