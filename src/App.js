import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

// common root component, used from index.ios and index.android
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB4vxedmGU__nFewiiMOSz6cY71S38Ph00',
    authDomain: 'auth-20330.firebaseapp.com',
    databaseURL: 'https://auth-20330.firebaseio.com',
    storageBucket: 'auth-20330.appspot.com',
    messagingSenderId: '1090434483492'
    });
  }
  render() {
    return (
      <View>
        <Header text={'Auth'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
