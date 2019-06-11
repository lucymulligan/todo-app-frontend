import React from 'react';

class ListItem extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteTask(this.props.id);

    };

    handleCompleteClick = () => {
        this.props.markTaskCompleted(this.props.id);

    };


    render() {
        return (
            <div className="row">
                <div className="col-6">
                    {this.props.task.task}
                </div>
                <div className="col-3">
                    {this.props.task.completed ? <button className="btn btn-success">Completed :)</button> : <button onClick={this.handleCompleteClick} className="btn btn-info">To Complete</button>}
                </div>
                <div className="col-3">
                    {this.props.task.completed ? null : <button onClick={this.handleDeleteClick} className="btn btn-dark">Delete</button>}
                </div>
            </div>
        );
    }
}




export default ListItem; 
