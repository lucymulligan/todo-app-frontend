import React, { Component } from "react";

class addItem extends Component {
    render() {
        return (
            <form>
                <label>What's to do?</label>
                <input type="text" placeholder="Enter your new task here..." />
                <label for="urgent"><input id="Urgent" type="radio" name="urgent-important"/> Urgent </label>
                    <label for="important"><input id="important" type="radio" name="indoor-important"/> High Priority</label>
                        <button type="button">Add</button>
            </form>
                    );
                }
            }
            
export default addItem; 