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
  "Call Mum",
  "Do the shopping",
]
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Row">
          <Header />
          <Nav />
        </div>
        <div className="Row">
          <TaskCounter count={toDoListItems.length} /></div>
        <div className="Row">
          <AddItem />
          <div className="Row">
            <div className="Container">
              {
                toDoListItems.map(function (toDoListItems, i) {
                  return <ListItem task={toDoListItems} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
