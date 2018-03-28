/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    isLoggedIn: null
  };
  //
  componentWillMount() {
    console.log('Inside componentWillMount');
    firebase.initializeApp({
      apiKey: 'AIzaSyD-FiSgTRt5Q2MQOP1ptR18NPfvNSkVuxw',
      authDomain: 'authenticationsample-12df0.firebaseapp.com',
      databaseURL: 'https://authenticationsample-12df0.firebaseio.com',
      projectId: 'authenticationsample-12df0',
      storageBucket: '',
      messagingSenderId: '292788396203'
    });

    //On auth state changed
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true: {
        return (
          <Button
            onClickListener={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </Button>
        );
      }
      case false: {
        return <LoginForm />;
      }
      default: {
        return <Spinner />;
      }
    }
  }

  render() {
    console.log('Inside render');
    return (
      <View style={styles.container}>
        <Header screenTitle={'Firebase Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

export default App;
