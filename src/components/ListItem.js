import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.task}
            <button type="button" class="btn btn-success">Complete</button>
            <button type="button" class="btn btn-danger">Delete</button></li>
        );
    }
}

export default ListItem; 
