import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Walk dog',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Work on project',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle complete status for tasks
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        // Toggle completed status
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo} />
      </div>
    </div>
    );
  }
}

export default App;
