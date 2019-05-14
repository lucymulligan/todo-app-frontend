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
        if (newTask.length > 0) {
            this.props.addTask(newTask)
            this.setState({
                text: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <label className="inputName" htmlFor="inputNewToDo"></label>
                    <div className="row">
                        <input type="text" className="inputNewToDo" placeholder="Enter your new task here..." value={this.state.text} onChange={this.handleChange} />
                    </div></div>

                <div className="priorityButtons">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light">ASAP</button>
                        <button type="button" class="btn btn-light">Soon</button>
                        <button type="button" class="btn btn-light">Ongoing</button>
                    </div>
                    <button onClick={this.handleClick} class="btn btn-secondary">Add</button>
                </div>
            </div>
        );
    }
}

export default addItem; 