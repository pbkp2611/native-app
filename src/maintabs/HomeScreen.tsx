import React from 'react';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'


type MainTabsParamList = {
  Home:undefined;
  Gallery: undefined;
}

const Tab = createBottomTabNavigator<MainTabsParamList>();

type HomeProps = BottomTabScreenProps<MainTabsParamList, 'Home'>;

export default function HomeScreen({navigation}:HomeProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <FontAwesomeIcon icon={faMugSaucer} />
      <Button
        title="Open gallery"
        onPress={() => navigation.navigate('Gallery')}
      />
    </View>
  );
}