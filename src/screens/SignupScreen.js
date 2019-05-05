
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation'

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    // firebaseにユーザ登録する
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // ログイン後にBackボタンを無効にするための処理
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ]
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          サインアップ
        </Text>
        <TextInput 
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({ email: text})}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Email Address'
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({ password: text})}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#C70F66'>
          <Text style={styles.buttnTitle}>登録する</Text>
        </TouchableHighlight>
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
  buttnTitle: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  }
});

export default SignupScreen;