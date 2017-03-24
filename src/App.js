import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from './components/common';

// common root component, used from index.ios and index.android
class App extends Component {
  render() {
    return (
      <Text>Hello!</Text>
    );
  }
}

export default App;
