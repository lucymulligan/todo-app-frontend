import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

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
          <ListItem task ="Walk the Dog" />
          <ListItem task ="Water the plants :)" />
          <ListItem task ="Get an Easter Egg" />
        </ul>
      </div>
    );
  }
}

export default App;
