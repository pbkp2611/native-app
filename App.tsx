import React from 'react';
import AppRoutes from './AppRoutes';

import { store } from './src/app/store'
import { Provider } from 'react-redux'


function App(): JSX.Element {
  return (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
  );
}

export default App