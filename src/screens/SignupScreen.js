
import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor='#C70F66'>
          <Text style={styles.buttnTitle}>ログインする</Text>
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
    backgroundColor: '#31676',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  buttnTitle: {
    fontSize: 18,
    fontColor: '#fff',
  }
});

export default SignupScreen;