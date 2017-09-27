import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>To Dos</th>
        </thead>
        <tbody>
          <Todo />
        </tbody>
      </table>
    );
  }
}

export default TodoList;
