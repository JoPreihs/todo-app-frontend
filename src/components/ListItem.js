import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <div id="currentList">

                <li>
                    {this.props.task}
                    <button>Done</button>
                    <button>Delete</button>

                </li>
            </div>
        );
    }
}
export default ListItem;
