import React from "react";
import './Additem.css';

class addItem extends React.Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = () => {
        const newTask = this.state.text;
        if (newTask.length > 0){
        this.props.addTask(newTask)
        this.setState({
            text: ''
        })
    }
    }

    render() {
        return (
            <div id="addTasks">
                <div className="row">
                <label htmlFor="inputNewToDo">What's to do?</label>
                <input type="text" id="inputNewToDo" placeholder="Enter your new task here..." value = {this.state.text} onChange={this.handleChange}/>
                </div>
                <div id="radioButtons" className="row">
                <label htmlFor="urgent"><input id="Urgent" type="radio" name="urgent-important" /> Urgent </label>
                <label htmlFor="important"><input id="important" type="radio" name="indoor-important" /> High Priority</label>
                <button onClick={this.handleClick} class="btn btn-secondary">Add</button>
                </div>
            </div>
        );
    }
}

export default addItem; 