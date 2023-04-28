import React from 'react';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, Card, Image, Input, SearchBar } from '@rneui/themed';
import { faBell, faMapMarker, faSearch, faTextWidth } from '@fortawesome/free-solid-svg-icons';


type MainTabsParamList = {
  Home:undefined;
  Gallery: undefined;
}
const url = 'https://image.shutterstock.com/image-photo/image-260nw-702310516.jpg'
const categories:any = [
  { id: 1, title: 'Category 1', imageurl: url, name: 'category1' },
  { id: 2, title: 'Category 2', imageurl: url, name: 'category2' },
  { id: 3, title: 'Category 3', imageurl: url, name: 'category3' },
  { id: 4, title: 'Category 4', imageurl: url, name: 'category4' },
  { id: 5, title: 'Category 5', imageurl: url, name: 'category5' },
  { id: 6, title: 'Category 6', imageurl: url, name: 'category6' }
];

type HomeProps = BottomTabScreenProps<MainTabsParamList, 'Home'>;

export default function HomeScreen({navigation}:HomeProps): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.header} >
        <View style={{flexDirection: 'row', alignItems:'center'}} >
          <FontAwesomeIcon icon={faMapMarker} />
          <View style={{marginStart:4}}>
            <Text style={styles.title}>My location name</Text>
            <Text style={styles.subTitle}>District/city, State</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}} >
          <FontAwesomeIcon icon={faBell} />
          <Image style={styles.image} source={{uri:url}}/>
        </View>
      </View>
      
      <View style={{marginTop:12}}>
        <Input placeholder='What you want to sell or purchase?' />
      </View>
      <View style={{marginTop:2}}>
        <Text style={{fontSize:20, marginBottom:4}}>Categories</Text>
        <FlatList
          data={categories.map((item:any) => item)}
          style={styles.list}
          numColumns={3}
          renderItem={({ item }) => (
            <Card containerStyle={styles.item}>
              <View>
                <Image
                  style={{width:60,height:60}}
                  source={{ uri: item.imageurl }}
                />
                <Text >{item.title}</Text>
              </View>
            </Card>
          )}
        />
      </View>
      <View style={{marginTop:12}}>
        <Text style={{fontSize:20, marginBottom:4}}>Available nearby you</Text>
        {
          categories.map((item:any)=>
            <View style={styles.fullItem} key={item.id}>
              <Image
                style={{width:100,height:100}}
                source={{ uri: item.imageurl }}
              />
              <View>
                <Text>{item.title}</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Price $20 Negotiable</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                  <Button title='Chat'/>
                  <Text>{'  '}</Text>
                  <Button title='Save'/>
                </View>
              </View>
            </View>
          )
        }  
      </View>
      <Text style={{fontSize:20, marginBottom:4}}>Not getting what you are looking for?</Text>
      <ScrollView horizontal={true}>
        <View style={{flex:1, flexDirection:'row'}}>
        {
        categories.map((item:any)=>
          <Card key={item.id}>
            <View>
              <Image
                style={{width:60,height:60}}
                source={{ uri: item.imageurl }}
              />
              <Text >{item.title}</Text>
            </View>
          </Card>
        )
        }
        </View>
      </ScrollView>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    justifyContent:'space-between'
  },
  title: {
    color: 'grey',
    fontSize: 21,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
  },
  profileContainer:{
    alignSelf:'flex-end'
  },
  image: {
    height:48,
    width:48,
    marginStart:10,
    borderRadius:24
  },
  list: {
    width: '100%',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
    margin:4
  },
  fullItem: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    margin:2,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:4,
    alignSelf:'stretch'
  }
});