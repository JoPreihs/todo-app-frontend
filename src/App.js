import React, { Component } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import TaskCounter from "./components/TaskCounter";
import uuid from "uuid/v4";

class App extends Component {
  state = {
    tasks: [
      { task: "Do hoovering", completed: true, id: uuid() },
      { task: "Do washing up", completed: false, id: uuid() },
      { task: "Do shopping", completed: false, id: uuid() },
      { task: "Do cooking", completed: true, id: uuid() },
    ],
  }
  addTask = (newTask) => {

    const newTasks = this.state.tasks.slice();
    const taskObject = { task: newTask, completed: false, id: uuid() };
    newTasks.push(taskObject);
    this.setState({
      tasks: newTasks
    });
  }
  deleteTask = id => {
const filteredTasks = this.state.tasks.filter(item => {
  if (item.id !== id) {
    return true;
  } else {
    return false;
  }
}); 
this.setState ({
  tasks: filteredTasks
});
  };

  markTaskCompleted = id => {
    const updatedTasks = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
return item;
    });
    this.setState ({
      tasks: updatedTasks
    });
  };
  
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
                return <ListItem 
                deleteTask = {this.deleteTask} 
                markTaskCompleted= {this.markTaskCompleted}
                key={i} 
                id ={item.id}
                task={item}  />
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
