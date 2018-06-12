export function TaskListController() {
  const controller = this;
  controller.selectTask = selectTask;

  function selectTask(item) {
    controller.onSetSelected({ item });
  }
}
