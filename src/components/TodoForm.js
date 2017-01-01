import React, { Component } from 'react';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: "",
      priorityVal: "1"
    }
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
    const {inputVal, priorityVal} = this.state;
    const {addTodo} = this.props;
    event.preventDefault();

    addTodo({ inputVal: inputVal, priorityVal: priorityVal })

    this.setState({
      inputVal: "",
      priorityVal: "1"
    })
  }

  render(){
    const {inputVal, priorityVal} = this.state;

    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" value={inputVal} onChange={this.onInputChange} />
          <select value={priorityVal} onChange={this.onPriorityChange} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type="submit" disabled={!inputVal}>Add TODO</button>
        </form>
      </div>
    );
  }

}

export default TodoForm;
