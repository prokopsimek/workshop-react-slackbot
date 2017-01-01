import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createLogger from 'redux-logger';

const middlewares = [];
const savedTodos = JSON.parse(localStorage.getItem("todos"));

let todosInitialState;
if(savedTodos) {
  todosInitialState = {
    todos: {
      items: savedTodos,
      order: 'asc'
    }
  }
}

if(process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(rootReducer, todosInitialState || null, applyMiddleware(...middlewares));

export default store;
