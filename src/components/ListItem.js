import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <div id="currentList">
                <div className="row">
                    <div className="col-6">
                        {this.props.task.task}
                    </div>
                    <div className="col-3">
                        {this.props.task.completed ? <button>Complete? Now delete!</button> : <button>Delete</button>}
                    </div>
                    <div className="col-3">
                        {this.props.task.completed ? null : <button>Delete</button>}
                    </div>
                </div>
            </div>
        );
    }
}
export default ListItem;
