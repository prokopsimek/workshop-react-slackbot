import { ADD_TODO } from "../constants/TodoForm";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload
})
