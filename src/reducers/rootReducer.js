import todos from './Todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todos
})

export default rootReducer;
