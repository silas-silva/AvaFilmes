/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CardMovie from './Components/CardMovie';
import Header from './Components/Header';
import List from './Pages/List';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.list}>
        <List />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C5C1',
  },
  header: {
    height: 50,
  },
  list: {
    flex: 1,
  }
});

export default App;
