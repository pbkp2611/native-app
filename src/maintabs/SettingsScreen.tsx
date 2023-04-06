import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken } from '../auth/authSlice';
import jwtDecode from 'jwt-decode';
import Share from 'react-native-share'

export default function SettingsScreen(): JSX.Element {

  const options = {
    title: 'My Application',
    message: 'I want to share more with the world!',
    url: 'https://google.com'
  }

  const shareApp = async (myOptions = options) => {
    try {
      await Share.open(myOptions);
    } catch (error: any) {
      console.log('Sharing '+error)
    }
  };

  const dispatch = useDispatch()

  function logOutUser(){
    dispatch(logOut('logout'))
  }

  const at = useSelector(selectCurrentToken)
  const decoded:any = jwtDecode(at)
  const {username, roles} = decoded.UserInfo

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Button onPress={async () => {
          await shareApp();
        }} title="Share" />
      <Text>User Name - {username}</Text>
      <Text>Role - {roles}</Text>
      <Button
        title="Logout"
        // style={{ marginTop: 20 }}
        onPress={() => logOutUser()}
      />
    </View>
  );
}