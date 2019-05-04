import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    handleDeleteClick = () => {
        this.props.deleteTask(this.props.id);
    };

    handleCompleteClick = () => {
        this.props.markTaskCompleted(this.props.id);

    }
    render() {
        return (
            <div id="currentList">
                <div className="row">
                    <div className="col-4">
                        {this.props.task.task}
                    </div>
                    <div className="col-4">
                        <p>Deadline</p><input type="date" />
                        {this.props.task.deadline}
                    </div>
                    <div className="col-3">
                        <p>Complete? Now Delete!</p>
                    </div>
                    <div className="col-1">
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>
                </div>
            </div>


        );
    }
}
export default ListItem;
