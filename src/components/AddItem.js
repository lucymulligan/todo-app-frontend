import React, {Component} from "react";

class addItem extends Component {
    render() {
        return (
            <form>
                <label>What's to do?</label>
                <input type = "text" />
                <button type = "button">Add</button>
            </form>
        );
    }
}

export default addItem; 