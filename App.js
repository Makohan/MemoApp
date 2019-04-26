import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoEditScreen from './src/screens/MemoEditScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoListScreen from './src/screens/MemoListScreen';

export default class App　extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Appbar />
        <MemoEditScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
