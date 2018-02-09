import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
// Redux SetUp
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);
console.log('store.getState()', store.getState())


 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Hello TechStack!" />
        </View>
      </Provider>
    );
  }
}






export default App;
