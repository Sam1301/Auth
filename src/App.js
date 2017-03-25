import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

// common root component, used from index.ios and index.android
class App extends Component {
  state = {
    // to encapsulate 3 states : loggedin, loggedout and unknown
      loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB4vxedmGU__nFewiiMOSz6cY71S38Ph00',
    authDomain: 'auth-20330.firebaseapp.com',
    databaseURL: 'https://auth-20330.firebaseio.com',
    storageBucket: 'auth-20330.appspot.com',
    messagingSenderId: '1090434483492'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  decideScreen() {
      switch (this.state.loggedIn) {
        case true:
        return (
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}
            >
              Log Out
            </Button>
          </CardSection>
        );
        case false:
          return <LoginForm />;
        default:
          return (
            <CardSection>
              <Spinner size={'large'} />
            </CardSection>
          );
      }
  }

  render() {
    return (
      <View>
        <Header text={'Auth'} />
        {this.decideScreen()}
      </View>
    );
  }
}

export default App;
