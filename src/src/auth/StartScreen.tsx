import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Icon, Button } from '@rneui/themed';

type RootStackParamList = {
  Start: undefined;
  Phone: undefined;
};

type StartProps = NativeStackScreenProps<RootStackParamList, 'Start'>;

function StartScreen({ navigation }:StartProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image
          source={{ uri: 'https://image.shutterstock.com/image-photo/image-260nw-702310516.jpg' }}
          style={{ height: 160, width: 200}}
        />
      <Button
        icon={<Icon name="user-plus" type="font-awesome" color="#ffffff" />}
        title="Get started"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('Phone')}
      />
    </View>
  );
}

export default StartScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#ff5722',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 16,
    width: '80%',
    maxWidth: 300,
  },
});