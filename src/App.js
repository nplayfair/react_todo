import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Walk dog',
        completed: false
      },
      {
        id: 2,
        title: 'Work on project',
        completed: true
      },
      {
        id: 3,
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

  render() {
    return (
    <div className="App">
    <Header />
    <Todos todos={this.state.todos} markComplete={this.markComplete} 
    delTodo={this.delTodo} />
    </div>
    );
  }
}

export default App;
