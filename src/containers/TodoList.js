import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { destroyTodo, togglOrder } from '../actions/TodoList';
import { getSortedTodos } from '../reducers/Todos';

const mapStateToProps = (state) => ({
  todos: getSortedTodos(state.todos.items, state.todos.order)
});

const TodoListContainer = connect(mapStateToProps, { destroyTodo, togglOrder })(TodoList)

export default TodoListContainer;
