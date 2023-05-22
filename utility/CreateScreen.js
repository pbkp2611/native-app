import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView } from 'react-native';
import TextField from './components/text';
import DropdownComponent from './components/dropdown';
import {c} from './q'
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentQnr, setSurveyState } from './surveySlice';

// clear after responses if he click 

function CreateScreen() {
  const [qs, setQs] = useState()
  // const [data, setData] = useState(c)
  const data = useSelector(selectCurrentQnr)
  const dispatch = useDispatch()
  
  useEffect(() => {
    var list = []
    const addNext = (ids) => {
      ids.forEach(id => {
        q = data.find(obj => obj.id == id);
        if(!q.response){
          if(q.type=='text'){
            list.push(
              <TextField key={q.id} q={q} />
            )
          }else if(q.type=='dropdown'){
            list.push(
              <DropdownComponent key={q.id} q={q} handleData={handleData} />
            )
            if(q.response){
              option = q.options.find(obj => obj.label === q.response);
              if(option.next)
                addNext(option.next.split(','))
            }
          }
        }
      })
    }
    data.forEach(q => {
      if(q.response || !q.dependent){
        if(q.type=='text'){
          list.push(
            <TextField key={q.id} q={q} />
          )
        }else if(q.type=='dropdown'){
          list.push(
            <DropdownComponent key={q.id} q={q} handleData={handleData} />
          )
          if(q.response){
            option = q.options.find(obj => obj.label === q.response);
            if(option.next)
              addNext(option.next.split(','))
          }
        }
      }
    });
    setQs(list)
  }, [data]);

  const handleData=(id, response)=>{
    console.log(`id ${id}, reponse ${response}`)
    dispatch(setSurveyState({id:id, response:response}))
  }

  return (
    <View style={{ flex: 1, width:'100%', height:'100%' }}>
      <ScrollView>
        {
          qs
          ?
          qs:
          <Text>Something went wrong?</Text>
        }
      </ScrollView>
    </View>
  );
}

export default CreateScreen