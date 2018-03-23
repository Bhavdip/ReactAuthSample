import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  //define a state and its props
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Name'}
            hint={'Email adddress'}
            onTextChnageListener={email => {
              this.setState({ email });
            }}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            hint={'Enter Password'}
            onTextChnageListener={password => {
              this.setState({ password });
            }}
            value={this.state.password}
            inputTypePassword
          />
        </CardSection>
        <CardSection>
          <Button
            onClickListener={() => {
              console.log(this.state.text);
            }}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;
