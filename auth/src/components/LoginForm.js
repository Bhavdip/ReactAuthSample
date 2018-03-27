import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, Alert } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  //define a state and its props
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    this.setState({ error: '' });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            console.log('Authentication faild');
            this.setState({ error: 'Authentication faild' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Name'}
            hint={'Email adddress'}
            onTextChangeListener={text => {
              this.setState({ email: text });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            hint={'Enter Password'}
            onTextChangeListener={text => {
              this.setState({ password: text });
            }}
            inputTypePassword
          />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onClickListener={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: '#000121',
    alignItems: 'center'
  }
};
export default LoginForm;
