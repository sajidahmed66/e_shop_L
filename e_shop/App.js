import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Main from './app/Navigations/Main'
import { NavigationContainer } from '@react-navigation/native';


//redux
import { Provider } from 'react-redux';
import store from './app/Redux/store';


const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
