import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { useRefreshMutation } from '../auth/authApiSlice';
import { useSelector } from 'react-redux';
import { selectRefreshToken } from '../auth/authSlice';

export default function SetProfileScreen(): JSX.Element {

  const [displayName, setDisplayName] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [refresh, { isLoading }] = useRefreshMutation()
  const rt = useSelector(selectRefreshToken)

  const handleDisplayName = async() => {
    try {
      await refresh({displayName:displayName, refreshToken:rt}).unwrap()
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
    <View style={styles.container}>
      {errMsg && <Text>{errMsg}</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Text style={styles.title}>Please set your profile</Text>
      <Input
        placeholder='Display Name'
        value={displayName}
        onChangeText={setDisplayName}
      />
      <Button
        title='Submit'
        onPress={handleDisplayName}
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


