import { TaskListItemController } from './TaskListItem.controller';

export const TaskListItem = {
  template: require('./TaskListItem.html'),
  controller: TaskListItemController,
  controllerAs: 'itemController',
  bindings: {
    item: '<',
    onSelectItem: '&',
  },
};
