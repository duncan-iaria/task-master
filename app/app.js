import angular from 'angular';
import * as foundation from 'angular-foundation-6';

import { APP_NAME } from './constants';

import {
  TaskContainer,
  TaskForm,
  TaskList,
  TaskListItem,
  TaskDeleteModal,
} from './TaskContainer';

angular.module(APP_NAME, ['mm.foundation.modal']);

angular.module(APP_NAME).component('taskContainer', TaskContainer);
angular.module(APP_NAME).component('taskForm', TaskForm);
angular.module(APP_NAME).component('taskList', TaskList);
angular.module(APP_NAME).component('taskListItem', TaskListItem);
angular.module(APP_NAME).component('taskDeleteModal', TaskDeleteModal);
