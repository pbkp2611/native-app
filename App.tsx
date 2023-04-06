import React from 'react';
import AppRoutes from './AppRoutes';
import { PersistGate } from 'redux-persist/integration/react'

import {persistor} from './src/app/store'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { Text } from '@rneui/base';


function App(): JSX.Element {
  return (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
  );
}

export default App