import React, { Component } from 'react';

class TodoList extends Component{
  saveIt = () => {
    localStorage.setItem("todos", JSON.stringify(this.props.todos))
  }

  componentDidMount = () => {
    window.onbeforeunload = this.saveIt
  }

  render(){
    const {todos, destroyTodo, togglOrder} = this.props;

    return (
      <div>
        {todos.map((item, index) => {
          return(
            <div key={index}>{item.id} - {item.value} (prio: {item.pvalue}) <button onClick={() => destroyTodo(item.id)}>X</button></div>
          )
        }
      )}

        <button onClick={togglOrder}>Sort by Priority</button>
      </div>
    )
  }
}

export default TodoList;
