import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className="Row">
                <div className="col-8">
                    {this.props.task}
                    </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Complete</button>
                    </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}


export default ListItem; 
