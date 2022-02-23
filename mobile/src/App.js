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

import Main from './Pages/Main';

const App = () => {
  return (
    <View style={styles.container}> 
      <Main/>
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
});

export default App;
