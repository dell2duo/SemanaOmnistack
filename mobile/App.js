import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

//YellowBox.ignoreWarnings([]); //ignora warnings

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes />
    </>
  );
}