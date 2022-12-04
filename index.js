/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ButtonCalc from './src/ButtonCalc';
import Calculator from './src/Calculator';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Calculator);
