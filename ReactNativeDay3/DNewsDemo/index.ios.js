/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引用外部的组件
var Main = require('./Component/LZMain');

export default class DNewsDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('DNewsDemo', () => DNewsDemo);
