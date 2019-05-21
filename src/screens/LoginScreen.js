import React from 'react';
import { SecureStore } from 'expo';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
  state = {
    email: 'test1@example.com',
    password: '123456',
    isLoading: true,
  }

  // Reactコンポーネントをマウント（≒レンダリング）した後に実行する
  async componentDidMount() {
    this.setState({ isLoading: false });
    
    // // 前回入力したID/パスワードで自動ログインする
    // const email = await SecureStore.getItemAsync('email');
    // const password = await SecureStore.getItemAsync('password');
    // if (email == null || password == null) {
    //   this.setState({ isLoading: false});
    //   return;
    // }

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState({ isLoading: false });
    //     this.navigationToHome();
    //   });
  }

  navigationToHome() {
    // ログイン後にBackボタンを無効にするための処理
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });

    // 画面遷移
    this.props.navigation.dispatch(resetAction);
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // 入力したID/パスワードを保持する
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigationToHome();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return(
      <View style={styles.container}>
        <Loading text="ログイン中" isLoading={this.state.isLoading} />
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput 
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({ email: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Email Address'
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({ password: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#C70F66'>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;