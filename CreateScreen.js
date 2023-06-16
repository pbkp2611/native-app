import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview'
// import axios from 'axios';
import { qnr, next } from './html';
import { Button } from '@rneui/themed';

function CreateScreen() {

  const [page, setPage] = useState(qnr)
  const [call, setCall] = useState('')

  useEffect(() => {
    // axios.get(`http://192.168.1.123:8000/appointment/admin`).then((response) => {
    //   //console.log(response.data);
    //   setPage(response.data)
    // });
    //setPage(qnr)
  }, [page]);

  const setNext = ()=>{
    this.webview.injectJavaScript('sendDataToReactNativeApp()')
    setPage(next)
  }

  return (
    <>
      <WebView
        originWhitelist={['*']}
        source={{ html: page }}
        onMessage={(event) => {
          console.log(event.nativeEvent.data) // Client received data
        }}
        ref={ref => (this.webview = ref)}
      />
      <Button title='Next' onPress={()=>setNext()} />
    </>
  );
}

export default CreateScreen