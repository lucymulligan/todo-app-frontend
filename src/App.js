import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav text="Welcome to my app"/>
      <Nav text="Read more about it"/>
      <Nav text="Partners"/>
      <Nav text="About us"/>
      <AddItem />
        <h4>Here's just a list of things that need to get done.</h4>
        <ul>
          <li>Take dog for a walk
            <button>Done</button>
            <button>Delete</button>
          </li>
          <li>Water the plants :)
          <button>Done</button>
            <button>Delete</button>
          </li>
          <li>Get an easter egg
          <button>Done</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
