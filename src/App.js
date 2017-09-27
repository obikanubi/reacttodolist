import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todos/todoform.js';
import TodoList from './components/todos/todolist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
