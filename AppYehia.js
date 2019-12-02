import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Scanner from './Scanner';
import Settings from './Settings';

const MainNavigator = createStackNavigator({
  Settings: {screen: Settings},
  Scanner: {screen: Scanner},
});

const App = createAppContainer(MainNavigator);

export default App;
