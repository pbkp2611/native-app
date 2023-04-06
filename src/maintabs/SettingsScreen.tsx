import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken, selectRefreshToken } from '../auth/authSlice';
import jwtDecode from 'jwt-decode';

export default function SettingsScreen(): JSX.Element {

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
      <Text>User Name - {username}</Text>
      <Text>Role - {roles}</Text>
      <Button
        title="Logout"
        onPress={() => logOutUser()}
      />
    </View>
  );
}