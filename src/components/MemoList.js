import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return(
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/22</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/22</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,

  },
  memoDate: {
    fontSize: 14,

  },
});

export default MemoList;
