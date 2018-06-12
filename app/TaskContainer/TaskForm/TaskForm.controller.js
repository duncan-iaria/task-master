export function TaskFormController() {
  const controller = this;
  controller.deleteItem = deleteItem;
  controller.addItem = addItem;
  controller.clearItem = clearItem;

  function deleteItem() {
    controller.onDelete({ task: controller.selectedTask });
  }

  function addItem() {
    controller.onAdd({ task: controller.selectedTask });
  }

  function clearItem() {
    controller.onClear();
  }
}
