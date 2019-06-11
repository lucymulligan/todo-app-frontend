import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Nav from './components/Nav';
import TaskCounter from './components/TaskCounter';
import uuid from 'uuid/v4';
import axios from 'axios';



class App extends React.Component {

  state = {
    tasks: [
    ],
  }
//starts off empty, once data is recieved, tasks will be populated
  
  componentWillMount() {
    axios.get("https://ndae8t0z37.execute-api.eu-west-2.amazonaws.com/dev/tasks")
    .then(response => {
      this.setState({tasks: response.data.tasks});
    })
    .catch(error => {
      console.log(error);
    });
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
