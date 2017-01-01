import { ADD_TODO } from "../constants/TodoForm";
import { DESTROY_TODO, TOGGL_ORDER } from "../constants/TodoList";

const todosInitialState = { items: [], order: 'asc' };

export const getSortedTodos = (state, order) => {
  switch (order) {
    case 'asc':
      return [
        ...state.sort((a, b) => {
          if (a.pvalue === b.pvalue) {
            return 0;
          } else {
            return a.pvalue > b.pvalue ? -1 : 1;
          }
        })
      ]

    default:
      return [
        ...state.sort((a, b) => {
          if(a.pvalue === b.pvalue){
            return 0
          } else {
            return a.pvalue < b.pvalue ? -1 : 1
          }
        })
      ]
  }
}

const todos = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newId = Math.max(...state.items.map(item => item.id), 0) + 1;
      const inputVal = action.payload.inputVal;
      const priorityVal = action.payload.priorityVal;

      return {
        ...state,
        items: [...state.items, { id: newId, value: inputVal, pvalue: priorityVal } ]
      }

    case DESTROY_TODO:
      const itemId = action.id;

      return {
        ...state,
        items: state.items.filter(item => item.id !== itemId)
      }

    case TOGGL_ORDER:
      const newOrder = (state.order === 'asc' ? 'desc' : 'asc');
      return { ...state, order: newOrder }

    default:
      return state

  }
}

export default todos;
