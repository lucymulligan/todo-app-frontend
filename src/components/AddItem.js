import React from "react";

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
            <div>
                <label htmlFor="inputNewToDo">What's to do?</label>
                <input type="text" id="inputNewToDo" placeholder="Enter your new task here..." value = {this.state.text} onChange={this.handleChange}/>
                <label for="urgent"><input id="Urgent" type="radio" name="urgent-important" /> Urgent </label>
                <label for="important"><input id="important" type="radio" name="indoor-important" /> High Priority</label>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default addItem; 