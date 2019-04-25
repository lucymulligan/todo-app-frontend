import React from "react";

class addItem extends React.Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        console.log('Recieved an event!');
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="inputNewToDo">What's to do?</label>
                <input type="text" id="inputNewToDo" placeholder="Enter your new task here..." value = {this.state.text} onChange={this.handleChange}/>
                <label for="urgent"><input id="Urgent" type="radio" name="urgent-important" /> Urgent </label>
                <label for="important"><input id="important" type="radio" name="indoor-important" /> High Priority</label>
                <button type="button">Add</button>
            </div>
        );
    }
}

export default addItem; 