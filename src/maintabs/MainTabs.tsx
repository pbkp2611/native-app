import React from 'react';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import GalleryScreen from '../utility/GalleryScreen';
import { logOut } from '../auth/authSlice';

type MainStackParamList = {
  Gallery: undefined;
  MainTabs:undefined;
};

type MainTabsParamList = {
  Home:undefined;
  Settings:undefined;
  Create:undefined;
  Gallery: undefined;
}

const Tab = createBottomTabNavigator<MainTabsParamList>();
const Stack = createNativeStackNavigator<MainStackParamList>();

type HomeProps = BottomTabScreenProps<MainTabsParamList, 'Home'>;

function HomeScreen({navigation}:HomeProps): JSX.Element {
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

function SettingsScreen(): JSX.Element {

  const dispatch = useDispatch()

  function logOutUser(){
    dispatch(logOut('logout'))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Button
        title="Logout"
        onPress={() => logOutUser()}
      />
    </View>
  );
}

const Btn = (): JSX.Element => {
  return <></>
}

const Modal = ():JSX.Element => {
  return (
    <Button title="   +   "/>
  )
}

function AuthRoutes(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  )

}

function MainTabs(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => (
          <Button
            title="Info"
          />
        ),
      }}/>
      <Tab.Screen name="Create" component={Btn} options={{
        tabBarButton: () => (<Modal />),
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default AuthRoutes;