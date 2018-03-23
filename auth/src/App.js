/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
  }

  render() {
    console.log('Inside render');
    return (
      <View style={styles.container}>
        <Header screenTitle={'Firebase Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  description: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default App;
