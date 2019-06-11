import React, { Component } from 'react';
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

  render() {
    return (
    <div className="App">
    <Todos todos={this.state.todos} />
    </div>
    );
  }
}

export default App;
