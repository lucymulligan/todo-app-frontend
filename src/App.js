import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

const toDoListItems = [
  "Garden the plants",
  "Make an omlette",
  "Bath the cat",
  "Download some music",
  "Book some train tickets",
  "Call Mum"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav text="Welcome to your toDo application!"/>
      <Nav text="Read more about it"/>
      <AddItem />
        <h4>Here's just a list of things that need to get done.</h4>
        <h5>Let's work together through each task</h5>
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
