import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Nav from './components/Nav';
import TaskCounter from './components/TaskCounter';
import uuid from 'uuid/v4';



class App extends React.Component {

  state = {
    tasks: [
      { task: 'Garden the plants', completed: false, id: uuid() },
      { task: 'Bath the cat', completed: false, id: uuid() },
      { task: 'Download some music', completed: false,  id: uuid() },
      { task: 'Book the train tickets', completed: false, id: uuid() },
      { task: 'Call Mum', completed: false, id: uuid() },
      { task: 'Do the Shopping', completed: true, id: uuid() },
      { task: 'Mop up', completed: true, id: uuid() },
    ]
  }

  addTask = (newTask) => {
    const newTasks = this.state.tasks.slice();
    const taskObject = { task: newTask, completed: false, id: uuid() }
    newTasks.push(taskObject);
    this.setState({
      tasks: newTasks
    });
  }

  deleteTask = id => {
    const filteredTasks = this.state.tasks.filter(item => {
      if (item.id !== id) {
        return true;
       } else {
          return false;
        }
      }
    );

    this.setState({
      tasks: filteredTasks
    });
  };

  markTaskCompleted = id => {
    const updatedTasks = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.completed = true; 
      }
      return item; 
    })
    this.setState({
      tasks: updatedTasks
    });
  };

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className="row">
            <Header />
            <Nav />
          </div></div>
        <div className="row">
          <TaskCounter count={this.state.tasks.length} /></div>
        <div className="container">
          <div className="row">
            <AddItem addTask={this.addTask} />
          </div>
          <div className="row">
            <div className="container">
              {
                this.state.tasks.map((item, i) => {
                  return <ListItem 
                  id={item.id}
                  deleteTask={this.deleteTask}
                  key={i} 
                  markTaskCompleted={this.markTaskCompleted}
                  task={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
