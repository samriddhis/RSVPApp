/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

navigationVar = global.navigationVar;
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
