import { TASK_TYPES } from '../constants';
import moment from 'moment';

const taskModel = {
  id: null,
  name: null,
  type: TASK_TYPES[0],
  desc: null,
  dateOfBirth: null,
};

export function TaskContainerController($modal) {
  const controller = this;
  controller.generatedId = 1;
  controller.taskTypes = TASK_TYPES;
  controller.taskData = [];
  controller.selectedTask = { ...taskModel };
  controller.addTask = addTask;
  controller.deleteTask = deleteTask;
  controller.onDeleteTask = onDeleteTask;
  controller.setSelectedTask = setSelectedTask;
  controller.resetSelectedTask = resetSelectedTask;

  function addTask(task) {
    if (task.id) {
      updateTask(task);
    } else {
      task.dateOfBirth = moment().format('h:m A [on] MMM D, YYYY');
      task.id = controller.generatedId;
      controller.taskData = [...controller.taskData, task];

      controller.generatedId++;
    }

    resetSelectedTask();
  }

  function updateTask(task) {
    const tempIndex = controller.taskData.findIndex(tTask => tTask.id === task.id);
    controller.taskData[tempIndex] = task;
  }

  function onDeleteTask(task) {
    const tempModal = $modal.open({
      size: 'small',
      component: 'taskDeleteModal',
    });

    tempModal.result
      .then(() => {
        deleteTask(task);
      })
      .catch(() => {
        return;
      });
  }

  function deleteTask(task) {
    const tempTaskData = controller.taskData.reduce((accumulator, tempTask) => {
      if (tempTask.id !== task.id) {
        return accumulator.concat(tempTask);
      } else {
        return accumulator;
      }
    }, []);

    controller.taskData = [...tempTaskData];
    resetSelectedTask();
  }

  function setSelectedTask(task) {
    controller.selectedTask = { ...task };
  }

  function resetSelectedTask() {
    controller.selectedTask = { ...taskModel };
  }
}

TaskContainerController.$inject = ['$modal'];
