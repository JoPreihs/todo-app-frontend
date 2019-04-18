import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

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
          <ListItem task="Do hoovering"/>
          <ListItem task="Buy Easter Eggs"/>
        </ul>
      </div>

    );
  }
}

export default App;
