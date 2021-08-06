import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from "./src/pages/Routes";
import { Store } from './src/store';

export default function App() {

  return (
    <Store>
      <StatusBar animated={true} backgroundColor="rgb(0,0,0)"/>
      <Routes />
    </Store>
  );
}
