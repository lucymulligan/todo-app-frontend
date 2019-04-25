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
      {task: 'Garden the plants', completed: false},
      {task: 'Bath the cat', completed: false},
      {task: 'Download some music', completed: false},
      {task: 'Book the train tickets', completed: false},
      {task: 'Call Mum', completed: false},
      {task: 'Do the Shopping', completed: true},
      {task: 'Mop up', completed: true},
    ]
  }

  addTask = (newTask) => {
    const newTasks = this.state.tasks.slice(); 
    const taskObject = {task: newTask, completed: false}
    newTasks.push(taskObject);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <Header />
          <Nav />
        </div>
        <div className="row">
          <TaskCounter count={this.state.tasks.length} /></div>
          <div className="container">        
          <div className="row">
          <AddItem addTask={this.addTask} />
          </div>
          <div className="row">
            <div className="container">
              {
                this.state.tasks.map(function (item, i) {
                  return <ListItem key ={i} task={item} />;
                })}
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
