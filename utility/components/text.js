import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

function TextField(props) {

  return (
    <View style={{ height:props.h?0:80}}>
      <Text>{props.q.id}. {props.q.text}</Text>
      <Input style={{borderColor:'grey', borderWidth:1}} />
    </View>
  );
}

export default TextField