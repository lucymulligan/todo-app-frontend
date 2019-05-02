import React from 'react';

class ListItem extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteTask(this.props.id);

    };




    render() {
        return (
            <div className="row">
                <div className="col-6">
                    {this.props.task.task}
                </div>
                <div className="col-3">
                    {this.props.task.completed ? <button class="btn btn-success">Completed :)</button> : <button class="btn btn-info">To Complete</button>}
                </div>
                <div className="col-3">
                    {this.props.task.completed ? null : <button onClick={this.handleDeleteClick} class="btn btn-dark">Delete</button>}
                </div>
            </div>
        );
    }
}




export default ListItem; 
