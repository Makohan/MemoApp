import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
        })
        this.setState({ memoList });
      });
      /* onSnapshotには例外キャッチが */
      // .catch((error) => {
      //   console.log(error);
      // });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  deleteMemo(deleteMemo) {
    console.log('deleteMemo:' + deleteMemo);
    const newMemoList = this.state['memoList'].filter(memo => memo !== deleteMemo);
    this.setState({
      memoList: newMemoList,
    });

    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).doc(deleteMemo['key']).delete()
      .then(() => {
        console.log('DELETE SUCCESS');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  myMethod(i) {
    console.log(i);
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} deleteMemo={(i) => this.deleteMemo(i) } myMethod={(i) => this.myMethod(i) }/>
        <CircleButton name='plus' onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  }
})

export default MemoListScreen;