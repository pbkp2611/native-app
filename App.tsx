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


export default function HomeScreen({navigation}:HomeProps): JSX.Element {

  const [dataProvider, setDataProvider] = useState(new DataProvider((r1, r2) => r1 !== r2));
  const [layoutProvider, setLayoutProvider] = useState(new LayoutProvider(() => 'NORMAL', (type, dim) => {
    dim.width = 500;
    dim.height = 160;
  }));
  
  useEffect(() => {
    setDataProvider(dataProvider.cloneWithRows(cars));
  }, []);

  const rowRenderer = useCallback((type:any, data:any) => (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://image.shutterstock.com/image-photo/image-260nw-702310516.jpg' }}
        style={{width:150, height:150}}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  ), []);

  return (
    <View style={{ flex: 1 }}>
      <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
    width: 500,
    borderRadius: 5,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
