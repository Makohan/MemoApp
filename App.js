import React from 'react';
import { StyleSheet, View } from 'react-native';


export default class App　extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Appbar />
        <MemoListScreen />
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
