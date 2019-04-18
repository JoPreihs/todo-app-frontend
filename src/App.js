import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from "./components/AddItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav text="Welcome to my app" />
        <Nav text="About this app" />
        <Nav text="Contact Us" />
        <AddItem />
        <h4>Here is a list of things I need to do</h4>
        <ul>
          <li>Do hoovering
          <button>Done</button>
            <button>Delete</button>
          </li>
          <li>Buy Easter eggs
          <button>Done</button>
            <button>Delete</button>
          </li>
          <li>Do washing
          <button>Done</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>

    );
  }
}

export default App;
