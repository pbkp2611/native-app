import React from 'react';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';

import GalleryScreen from '../utility/GalleryScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../auth/authSlice';
import SetProfileScreen from './SetProfileScreen';
import CreateScreen from '../utility/CreateScreen';
import { FAB } from '@rneui/themed';


type MainStackParamList = {
  Gallery: undefined;
  Create:undefined;
  MainTabs:undefined;
  SetProfile:undefined;
};

type MainTabsParamList = {
  Home:undefined;
  Settings:undefined;
  TabBtn:undefined;
  Create:undefined;
  Gallery: undefined;
}

const Tab = createBottomTabNavigator<MainTabsParamList>();
const Stack = createNativeStackNavigator<MainStackParamList>();

const Btn = (): JSX.Element => {
  return <></>
}

function AuthRoutes(): JSX.Element {
  const at = useSelector(selectCurrentToken)
  const decoded:any = jwtDecode(at)
  const {username} = decoded.UserInfo
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      {
        username
        ?
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </>
        :
        <Stack.Screen name="SetProfile" component={SetProfileScreen} />
      }
    </Stack.Navigator>
  )
}

function MainTabs({navigation}:any): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => (
          <Button
            title="Info"
          />
        ),
        tabBarIcon:()=>(
          <FontAwesomeIcon icon={faHouse} />
        )
      }}/>
      <Tab.Screen name="Create" component={Btn} options={{
        tabBarButton: () => (
          <FAB
            visible
            icon={<FontAwesomeIcon icon={faPlus} />}
            onPress={()=>navigation.navigate('Create')}
          />
        )
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon:()=>(
          <FontAwesomeIcon icon={faUser} />
        )
      }}/>
    </Tab.Navigator>
  );
}

export default AuthRoutes;