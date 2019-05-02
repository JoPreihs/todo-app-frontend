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
                    <div className="col-6">
                        {this.props.task.task}
                    </div>
                    <div className="col-3">
                        {this.props.task.completed ? <p>Completed</p> : <p>Not Completed</p>}
                        
                    </div>
                    <div className="col-3">
                        <button onClick = {this.handleDeleteClick} >Delete</button>
                    </div>
                    <div className="col-2">
                    {!this.props.completed && <button onClick = {this.handleCompleteClick} >Mark as Complete</button>}
                    </div>
                </div>
            </div>
        );
    }
}
export default ListItem;
