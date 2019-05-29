
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import { ImagePicker, Permissions } from 'expo';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
    photo: null,
    hasCameraRollPermission: null,
  }

  async componentWillMount() {
    // カメラロールに対するPermissionを許可
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: status === 'granted' });
  }

  handleSubmit() {
    // // firebaseにユーザ登録する
    // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then((user) => {
    //     // TODO 画像アップロード(user.uidをURLパスに付与する)
    //     // firestorageに画像をアップロードする
    //     console.log(user.user.uid);
    //     console.log(this.state.photo);

        // Create a root reference
        const storageRef = firebase.storage().ref();
        console.log('A');
        const profileImageRef = storageRef.child('profile.jpg');
        console.log('B');
        profileImageRef.put(new File(this.state.photo.uri, 'TEST'))
          .then(function(snapshot) {
            console.log("Succdss");
            console.log({snapshot});
          })
          .catch(function(error){
            console.error('There was an error uploading a file to Cloud Storage:', error);
           });

        // // ログイン後にBackボタンを無効にするための処理
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({ routeName: 'Home' }),
        //   ],
        // });
        // this.props.navigation.dispatch(resetAction);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  }

  async pickImage() {
    console.log('pickImage');
    const result = await ImagePicker.launchImageLibraryAsync();
    if (result.cancelled) {
      console.log('image cancel');
      return;
    }
    this.setState({ photo: result });
  }

  render() {
    const { hasCameraRollPermission, photo } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          サインアップ
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        {
          hasCameraRollPermission
          && photo
          && <Image source={{ uri: photo.uri }} style={styles.image} />
        }
        <Button
          style={styles.button}
          title="プロフィール画像を選択"
          onPress={async () => { await this.pickImage(); }}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
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
    marginBottom: 10,
  },
  buttnTitle: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default SignupScreen;
