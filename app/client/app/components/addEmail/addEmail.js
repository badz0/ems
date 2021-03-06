import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addEmailComponent from './addEmail.component';
import ValidationService from './validation.service';

let addEmailModule = angular.module('addEmail', [
  uiRouter
])

.component('addEmail', addEmailComponent)

.service('ValidationService', ValidationService)

.name;

export default addEmailModule;
