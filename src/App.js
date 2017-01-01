import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';



const TodoForm = ({inputVal, onInputChange, onFormSubmit, priorityVal, onPriorityChange}) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={inputVal} onChange={onInputChange} />
        <select value={priorityVal} onChange={onPriorityChange} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit" disabled={!inputVal}>Add TODO</button>
      </form>
    </div>
  )
}



const TodoList = ({data, destroyTodo}) => {
  return (
    <div>
      {data.map((item, index) => {
        return(
          <div key={index}>{item.id} - {item.value} (prio: {item.pvalue}) <button onClick={() => destroyTodo(item.id)}>X</button></div>
        )
      }
    )}
    </div>
  )
}




class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      inputVal: "",
      priorityVal: "1",
      lastTodoId: 0,
      sortOrd: "asc"
    }
  }

  componentDidMount = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todocka"));

    if (savedTodos) {
      this.setState({
        data: savedTodos
      })
    }

    window.onbeforeunload = this.saveIt
  }

  ///////////// nefunguje pri refreshi
  // componentWillUnmount = () => {
  //   localStorage.setItem("todocka", JSON.stringify(this.state.data))
  // }

  saveIt = () => {
    localStorage.setItem("todocka", JSON.stringify(this.state.data))
  }

  togglPrioSort = () => {
    const {sortOrd} = this.state;

    this.setState({
      sortOrd: sortOrd === "asc" ? "desc" : "asc"
    })
  }

  onInputChange = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }

  onPriorityChange = (event) => {
    this.setState({
      priorityVal: event.target.value
    })
  }

  onFormSubmit = (event) => {
    const {data, lastTodoId, inputVal, priorityVal} = this.state;
    const newId = Math.max(...data.map(item => item.id), 0) + 1;
    event.preventDefault();

    this.setState({
      data: [...data, { id: newId, value: inputVal, pvalue: priorityVal }],
      inputVal: "",
      priorityVal: "1",
      lastTodoId: newId
    })
  }

  destroyTodo = (itemId) => {
    const {data} = this.state;

    this.setState({
      data: data.filter((item) => {
        return item.id !== itemId
      })
    })
  }

  render(){
    // Render JSX
    const {inputVal, priorityVal, sortOrd, data} = this.state;
    console.log('data', data)
    const sortedData = [...data].sort((a, b) => {
      if(a.pvalue === b.pvalue){
        return 0
      }
      if(sortOrd === "asc"){
        return a.pvalue > b.pvalue ? -1 : 1
      } else {
        return a.pvalue < b.pvalue ? -1 : 1
      }
    })
    return (
      <div>
        <Title />
        <TodoForm inputVal={inputVal} onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} priorityVal={priorityVal} onPriorityChange={this.onPriorityChange} />
        <TodoList data={sortedData} destroyTodo={this.destroyTodo} />

        <button onClick={this.saveIt}>Save shit</button>
        <button onClick={this.togglPrioSort}>Sort by Priority</button>
      </div>
    );
  }
}

export default App;
