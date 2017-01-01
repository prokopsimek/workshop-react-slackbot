import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions/TodoForm';

// const mapStateToProps = (state) => ({
//   todos: state.todos
// });

const TodoFormContainer = connect(null, { addTodo })(TodoForm)

export default TodoFormContainer;
