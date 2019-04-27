import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetailScreen: { screen: MemoDetailScreen },
  MemoEditScreen: { screen: MemoEditScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
}, {
  navigationOption: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  },
}
);

export default createAppContainer(App);