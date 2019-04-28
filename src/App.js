import React, { Component } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import TaskCounter from "./components/TaskCounter";

class App extends Component {
  state = {
    tasks: [
      { task: "Do hoovering", completed: true },
      { task: "Do washing up", completed: true },
      { task: "Do shopping", completed: true },
      { task: "Do cooking", completed: true },
    ],
  }
  addTask = (newTask) => {

    const newTasks = this.state.tasks.slice();
    const taskObject = { task: newTask, completed: false };
    newTasks.push(taskObject);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="App">
        <Nav text="Welcome to the new way to organise your life" />
        <div id="subHeader">
          <h4>Never forget another task again with this simple, effective life organiser</h4>
        </div>
        <div id="div3">
          <span className="getStarted">
            <h5>Let's get started!</h5>
          </span>
        </div>
        <div id="div4">
          <span className="getStarted">
            <h5>Just jot down your tasks and the date they need to be completed by below:</h5>
          </span>
        </div>
        <AddItem addTask={this.addTask} />
        <div id="currentListTitle">
          <h5>Current list of tasks:</h5>
            {
              this.state.tasks.map((item, i) => {
                return <ListItem key={i} task={item} deleteItem={this.deleteItem} />
              })
            }
        </div>
        <div id="tasksRemaining">
          <TaskCounter count={this.state.tasks.length} />
        </div>
      </div>

    );
  }
}

export default App;
