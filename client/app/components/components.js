import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';
import deledit from './deledit/deledit';
import UserDetails from './userDetails/userDetails';

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit,
  Charts,
  UserDetails,
  Cabinet,
  Grid,
  Firedb
])

.name;

export default componentModule;
