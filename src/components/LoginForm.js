import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
