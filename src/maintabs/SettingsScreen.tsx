import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Image } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken } from '../auth/authSlice';
import jwtDecode from 'jwt-decode';
import Share from 'react-native-share'
import {Asset, ImagePickerResponse, launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';
import { Dialog, Divider, ListItem } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faCog, faLanguage, faLock, faQuestionCircle, faShareAlt, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{flex:1, flexDirection:'row', margin:8}}>
        <Image
            source={{ uri:uri?uri:'https://image.shutterstock.com/image-photo/image-260nw-702310516.jpg' }}
            // containerStyle={styles.item}
            style={{ height: 80, width: 80, borderRadius:40}}
            PlaceholderContent={<Text>Loading...</Text>}
        />
        <View>
          <Text style={{marginTop:8, marginStart:12, fontSize:22}}>{username}</Text>
          <Text style={{marginStart:12, fontSize:18}}>@suzume.mota123</Text>
        </View>
      </View>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />

      <View style={{margin:4, flexDirection:'row'}}>
        <View style={{flex:1, alignItems:'center', marginRight:4, marginLeft:4, paddingBottom:4, backgroundColor:'white'}}>
          <Text style={{fontSize:22}}>Followers</Text>
          <Text>12K</Text>
        </View>
        <View style={{flex:1, alignItems:'center', marginRight:4, marginLeft:4, paddingBottom:4, backgroundColor:'white'}}>
          <Text style={{fontSize:22}}>Followings</Text>
          <Text>2K</Text>
        </View>
      </View>

      <View style={{margin:4}}>
        <ListItem>
          <FontAwesomeIcon icon={faUser} />
          <ListItem.Content>
            <ListItem.Title>Account</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
        <Divider width={1} color='#e6e3e3'/>
        <ListItem>
          <FontAwesomeIcon icon={faLock} />
          <ListItem.Content>
            <ListItem.Title>Privacy</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
        <Divider width={1} color='#e6e3e3'/>
        <ListItem>
          <FontAwesomeIcon icon={faLanguage} />
          <ListItem.Content>
            <ListItem.Title>Language</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
        <Divider width={1} color='#e6e3e3'/>
        <ListItem>
          <FontAwesomeIcon icon={faCog} />
          <ListItem.Content>
            <ListItem.Title>Settings</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
      </View>

      <View style={{marginTop:4,marginLeft:4, marginRight:4, marginBottom:8}}>
        <ListItem>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <ListItem.Content>
            <ListItem.Title>Help</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
        <Divider width={1} color='#e6e3e3'/>
        <ListItem onPress={async () => {
          await shareApp();
        }}>
          <FontAwesomeIcon icon={faShareAlt} />
          <ListItem.Content>
            <ListItem.Title>Share</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
        <Divider width={1} color='#e6e3e3'/>
        <ListItem onPress={() => logOutUser()}>
          <FontAwesomeIcon icon={faSignOut} />
          <ListItem.Content>
            <ListItem.Title>Logout</ListItem.Title>
          </ListItem.Content>
          <FontAwesomeIcon icon={faAngleRight} />
        </ListItem>
      </View>
    </View>
    </ScrollView>
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