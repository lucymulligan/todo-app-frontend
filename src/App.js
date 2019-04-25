import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Nav from './components/Nav';
import TaskCounter from './components/TaskCounter';

const toDoListItems = [
  "Garden the plants",
  "Make an omlette",
  "Bath the cat",
  "Download some music",
  "Book some train tickets",
  "Call Mum"
]
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className= "Row">
      <Header /> 
      <Nav />
      </div>
      <div className="Row">
      <TaskCounter count={toDoListItems.length} /></div>
      <div className = "Row"> 
      <AddItem />
      <div className="Row">
        <ul>
          {toDoListItems.map(function (item) {
            return <ListItem task={item} />;
          })}
          </ul>
          </div> 
      </div>
    </div> 
    );
  }
}

export default App;
