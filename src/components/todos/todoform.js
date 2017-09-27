import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form name="addToDo">
          <input type="text" name="addToDo" placeholder="Add Todo" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
