import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

const todoListItems = [
  "Do hoovering",
  "Buy Easter Eggs",
  "Do shopping",
  "Do cooking"
];

class App extends Component {
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
          <h5>Just jot down your tasks and the date they need to be completed by below:</h5>
        </div>
        <AddItem />
        <h4>Current list of tasks:</h4>
        <ul>
          {todoListItems.map(function (item) {
            return <ListItem task={item} />
          })}
        </ul>
        <div id="tasksRemaining">
          <h5>Tasks remaining: 1</h5>
        </div>
      </div>

    );
  }
}

export default App;
