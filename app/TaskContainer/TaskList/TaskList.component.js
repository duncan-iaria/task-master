import { TaskListController } from './TaskList.controller';

export const TaskList = {
  template: require('./TaskList.html'),
  controller: TaskListController,
  controllerAs: 'listController',
  bindings: {
    items: '<',
    onSetSelected: '&',
  },
};
