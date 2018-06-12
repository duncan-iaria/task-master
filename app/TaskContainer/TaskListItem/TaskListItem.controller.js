export function TaskListItemController() {
  const controller = this;
  controller.select = select;

  function select() {
    controller.onSelectItem({ item: controller.item });
  }
}
