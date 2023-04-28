import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from '@rneui/themed';
import { Asset, ImagePickerResponse, MediaType, launchImageLibrary } from 'react-native-image-picker';

function CreateScreen(): JSX.Element {

  const [uris, setUris] = useState<Asset[]|undefined>(undefined);

  type libraryOptionType = {
    selectionLimit: number,
    mediaType: MediaType,
    includeBase64: boolean,
  }
  
  const onImageLibraryPress = useCallback(async() => {
    let options:libraryOptionType = {
      selectionLimit: 6,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result:ImagePickerResponse = await launchImageLibrary(options);
    const assets:Asset[]|undefined = result?.assets
    // const uri:string|undefined = ast?ast[0].uri:undefined
    setUris(assets)
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Select images"
        onPress={() => onImageLibraryPress()}
      />
      {
        !uris
        ?
        <Text>Failed to load images</Text>
        :
        <FlatList
        data={uris.map((asset, i) => asset.uri)}
        style={styles.list}
        numColumns={3}
        // keyExtractor={(e) => e}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            containerStyle={styles.item}
            PlaceholderContent={<ActivityIndicator />}
          />
        )}
      />
      }
    </View>
  );
}

export default CreateScreen

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});