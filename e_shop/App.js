import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ProductContainer from './app/Screens/Products/ProductContainer';


const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>

      <ProductContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
