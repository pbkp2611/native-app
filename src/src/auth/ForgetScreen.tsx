import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

type RootStackParamList = {
  Start: undefined;
  Phone: undefined;
  Forgot:undefined;
  Otp:undefined;
  Profile: {phone: string};
  MyTabs:undefined
};

type ForgotProps = NativeStackScreenProps<RootStackParamList, 'Forgot'>;

function ForgotScreen({ navigation }:ForgotProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Get otp to reset password</Text>
      {/* <Button
        title="Get otp"
        onPress={() => navigation.navigate('Otp')}
      /> */}
    </View>
  );
}

export default ForgotScreen
