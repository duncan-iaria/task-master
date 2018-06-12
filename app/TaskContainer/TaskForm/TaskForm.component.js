import { TaskFormController } from './TaskForm.controller';

export const TaskForm = {
  template: require('./TaskForm.html'),
  controller: TaskFormController,
  controllerAs: 'formController',
  bindings: {
    selectedTask: '<',
    taskTypes: '<',
    onDelete: '&',
    onAdd: '&',
    onClear: '&'
  },
};
