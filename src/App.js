import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Nav from './components/Nav';
import TaskCounter from './components/TaskCounter';


class App extends React.Component {

  state = {
    tasks: [
      "Garden the plants",
      "Make an omlette",
      "Bath the cat",
      "Download some music",
      "Book some train tickets",
      "Call Mum",
      "Do the shopping",
    ]
  }

  addTask = (newTask) => {
    const newTasks = this.state.tasks.slice(); 
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
          <Header />
          <Nav />
        </div>
        <div className="Row">
          <TaskCounter count={this.state.tasks.length} /></div>
        <div className="Row">
          <AddItem addTask={this.addTask} />
          <div className="Row">
            <div className="Container">
              {
                this.state.tasks.map(function (toDoListItems, i) {
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
