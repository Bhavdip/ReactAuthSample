import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, Alert } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    //define a state and its props
    this.state = {
      email: '',
      password: '',
      error: '',
      isLoading: false
    };
  }

  onButtonPress() {
    this.setState({ error: '', isLoading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      isLoading: false
    });
  }

  onLoginFail() {
    console.log('Authentication faild');
    this.setState({ error: 'Authentication faild', isLoading: false });
  }

  renderButton() {
    if (this.state.isLoading) {
      return (
        <CardSection>
          <Spinner />
        </CardSection>
      );
    }
    if (this.state.email !== '' && this.state.password !== '') {
      return (
        <CardSection>
          <Button onClickListener={this.onButtonPress.bind(this)} disabled={false}>
            Login
          </Button>
        </CardSection>
      );
    }
    return (
      <CardSection>
        <Button onClickListener={this.onButtonPress.bind(this)} disabled>
          Login
        </Button>
      </CardSection>
    );
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
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            hint={'Enter Password'}
            onTextChangeListener={text => {
              this.setState({ password: text });
            }}
            value={this.state.password}
            inputTypePassword
          />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        {this.renderButton()}
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: '#B22222'
  }
};
export default LoginForm;
