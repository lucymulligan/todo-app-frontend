import React from "react";

class addItem extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor = "inputNewToDo">What's to do?</label>
                <input type="text" id="inputNewToDo" placeholder="Enter your new task here..." />
                <label for="urgent"><input id="Urgent" type="radio" name="urgent-important"/> Urgent </label>
                    <label for="important"><input id="important" type="radio" name="indoor-important"/> High Priority</label>
                        <button type="button">Add</button>
            </form>
                    );
                }
            }
            
export default addItem; 