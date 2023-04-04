import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

type RootStackParamList = {
  Start: undefined;
  Phone: undefined;
  Password:undefined;
  Forgot:undefined;
  Profile: {phone: string};
  MainTabs:undefined
};

type PasswordProps = NativeStackScreenProps<RootStackParamList, 'Password'>;

function PasswordScreen({ navigation }:PasswordProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your password</Text>
      <Button
        title="after password"
      />
      <Button
        title="Forget"
        onPress={() => navigation.navigate('Forgot')}
      />
    </View>
  );
}

export default PasswordScreen
