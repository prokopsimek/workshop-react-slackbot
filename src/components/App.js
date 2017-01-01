import React, { Component } from 'react';
import './App.css';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import Title from './Title';

class App extends Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      inputVal: "",
      priorityVal: "1",
      sortOrd: "asc"
    }
  }

  render(){
    // Render JSX
    const {inputVal, priorityVal, sortOrd, data} = this.state;

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
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
