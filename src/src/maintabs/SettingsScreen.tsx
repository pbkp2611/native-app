import React, { useCallback, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, Image } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken } from '../auth/authSlice';
import jwtDecode from 'jwt-decode';
import Share from 'react-native-share'
import {Asset, ImagePickerResponse, launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';
import { Dialog } from '@rneui/themed';

export default function SettingsScreen(): JSX.Element {


  const [uri, setUri] = useState<string|undefined>('');
  const [visible, setVisible] = useState(false);


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

  
  type libraryOptionType = {
    selectionLimit: number,
    mediaType: MediaType,
    includeBase64: boolean,
  }
  type cameraOptionType = {
    saveToPhotos: boolean,
    mediaType: MediaType,
    includeBase64: boolean,
  }
  const onImageLibraryPress = useCallback(async() => {
    setVisible(false)
    let options:libraryOptionType = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result:ImagePickerResponse = await launchImageLibrary(options);
    const ast:Asset[]|undefined = result?.assets
    const uri:string|undefined = ast?ast[0].uri:undefined
    setUri(uri)
  }, []);

  const onCameraPress = useCallback(async() => {
    setVisible(false)
    let options:cameraOptionType = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result:ImagePickerResponse = await launchCamera(options);
    const ast:Asset[]|undefined = result?.assets
    const uri:string|undefined = ast?ast[0].uri:undefined
    setUri(uri)
  }, []);

  // const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
            source={{ uri:uri?uri:'https://image.shutterstock.com/image-photo/image-260nw-702310516.jpg' }}
            // containerStyle={styles.item}
            style={{ height: 160, width: 160, borderRadius:80}}
            PlaceholderContent={<Text>Loading...</Text>}
      />
      <Button
        title="Select image"
        onPress={() => setVisible(true)}
      />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
      <Text>-</Text>
      <Text>User Name - {username}</Text>
      <Text>Role - {roles}</Text>
      <Text>-</Text>
      <Button onPress={async () => {
          await shareApp();
        }} title="Share the App"
      />
      <Text>-</Text>
      <Button
        title="Logout"
        // style={{ marginTop: 20 }}
        onPress={() => logOutUser()}
      />
    </View>
  );
}

function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}:any) {
  return (
    <SafeAreaView>
      <Dialog
        isVisible={isVisible}
        onBackdropPress={onClose}
      >
      <Dialog.Title title="Select option"/>
      <Dialog.Actions>
        <Dialog.Button title="Gallery" onPress={onImageLibraryPress}/>
        <Dialog.Button title="Camera" onPress={onCameraPress}/>
      </Dialog.Actions>
      </Dialog>
    </SafeAreaView>
  );
}