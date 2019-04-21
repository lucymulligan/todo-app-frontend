import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

const toDoListItems = [
  "Garden the plants",
  "Make an omlette",
  "Bath the cat"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav text="Welcome to your toDo application!"/>
      <Nav text="Read more about it"/>
      <Nav text="Partners"/>
      <Nav text="About us"/>
      <AddItem />
        <h4>Here's just a list of things that need to get done.</h4>
        <ul>
          {toDoListItems.map(function (item) {
            return <ListItem task={item} />;
          })}
        </ul>
      </div>
    
    );
  }
}

export default App;
