import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todos/todoform.js';
import TodoList from './components/todos/todolist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['clean whiteboard', 'drink water', 'sleep']
    }
  }

  addNewTodo(todo) {
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
