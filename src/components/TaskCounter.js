import React from 'react';
import './TaskCounter.css';

class TaskCounter extends React.Component {

    render() {
        return (
            <p>
                You have {this.props.count} tasks left to do.
        </p>
        );
    }
}

export default TaskCounter; 