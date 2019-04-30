import React, { Component } from "react";
import './AddItem.css';

class AddItem extends Component {
state = {
text: ''

}
handleChange = (event) => {
    this.setState({
        text: event.target.value
    })
}
handleClick = (e) => {
    e.preventDefault();
const newTask = this.state.text;
if (newTask.length > 0) {
    this.props.addTask(newTask);
    this.setState({
        text: ''
    });
}
}

    render() {
        return (
            <div id="AddTask">
                <form>
                    <div className="row">
                        <label htmlFor="inputNewTask"><h5>Task:</h5></label>
                        <input placeholder="Add your task here" type="text" id="inputNewTask" value={this.state.text} onChange={this.handleChange}></input>
                        <label><h5>Deadline</h5></label>
                        <input type="date" />
                        <label><h5>Add to my list</h5></label>
                        <button onClick={this.handleClick}>Add</button>
                
                    </div>
                </form>
            </div>
        );
    }
}
export default AddItem;