import React, { Component } from "react";
import './AddItem.css';

class AddItem extends Component {
    render() {
        return (
            <div id="AddTask">
                <form>
                    <label><h6>Task 1</h6></label>
                    <input type="text" />
                    <button type="button">Add</button>
                    <label><h6>Deadline</h6></label>
                    <input type="date" />
                    <label><h6>Add to my list</h6></label>
                    <button type="Submit">Add</button>
                </form>
            </div>
        );
    }
}
export default AddItem;