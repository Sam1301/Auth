import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.loginSuccess.bind(this))
          .catch(this.loginFail.bind(this));
      });
  }

  loginFail() {
    this.setState(
      {
        error: 'Authentication Failed.',
        loading: false
      }
    );
  }

  loginSuccess() {
      this.setState(
        {
          email: '',
          password: '',
          error: '',
          loading: false
        }
      );
  }

  showButton() {
    if (this.state.loading) {
      return (
        <Spinner size={'small'} />
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        {// email field
        }
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@gmail.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        {
        // password field
        }
        <CardSection>
          <Input
            label={'Password'}
            placeholder={'password'}
            value={this.state.password}
            // fwiw setstate performs a shallow merge for object specified
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
        {
          // show either button or spinner
        }
        {this.showButton()}

        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
