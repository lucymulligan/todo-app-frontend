import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    {this.props.task}
                    </div>
                <div className="col-3">
                    <button type="button" className="btn btn-success">Complete</button>
                    </div>
                <div className="col-3">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}


export default ListItem; 
