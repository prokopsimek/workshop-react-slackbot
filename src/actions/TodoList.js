import { DESTROY_TODO, TOGGL_ORDER } from "../constants/TodoList";

export const destroyTodo = (id) => ({
  type: DESTROY_TODO,
  id: id
})

export const togglOrder = () => ({
  type: TOGGL_ORDER
})
