import React, { Component } from "react";
import './AddItem.css';

class AddItem extends Component {
    render() {
        return (
            <div id="AddTask">
                <form>
                    <div className="row">
                        <label><h5>Task</h5></label>
                        <input type="text" />
                        <button type="button">Add</button>
                        <label><h5>Deadline</h5></label>
                        <input type="date" />
                        <label><h5>Add to my list</h5></label>
                        <button type="Submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddItem;