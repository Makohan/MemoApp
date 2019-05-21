import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

import Swipeout from 'react-native-swipeout';

const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

class MemoList extends React.Component {
  renderMemo({ item }) {
    // Buttons
    const swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => { this.props.deleteMemo(item); },
      },
    ];

    return (
      <Swipeout right={swipeoutBtns}>
<<<<<<< HEAD
        <TouchableHighlight onPress={() => {this.props.myMethod(1)}}>
=======
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
>>>>>>> 39fc9afc3709e4415a6d62045d639872eeaa31d9
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
            <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
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
