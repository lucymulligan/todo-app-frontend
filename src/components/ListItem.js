import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <div className="Row" col-6>
            <li>{this.props.task}
            <button type="button" class="btn btn-success" col-3>Complete</button>
            <button type="button" class="btn btn-danger" col-3>Delete</button></li>

            </div>
        );
    }
}


export default ListItem; 
