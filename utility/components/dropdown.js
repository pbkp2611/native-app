import React, {} from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function DropdownComponent(props) {

  const saveOption = (item, id) =>{
    props.handleData(id, item.label)
  }

  return (
    <View style={{ flex: 1, margin:5, height:props.h?0:80 }} >
      <Text>{props.q.id}. {props.q.text}</Text>
        <Dropdown
          data={props.q.options}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          onChange={item => {
            saveOption(item, props.q.id);
          }}
        />
    </View>
  );
}

export default DropdownComponent