import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import ArcadeSticks from './components/ArcadeSticks';

class App extends Component {
  state = {
    sticks: [],
    text: ''
  };

  getArcadeSticks = async sticks => {
    const res = await axios.get(`http://localhost:5000/apicall/all`);

    this.setState({ sticks: res.data });
  };

  render() {
    const { sticks } = this.state;

    return (
      <div className='App'>
        <h1>Hello from react!</h1>
        <h3>Arcade Sticks</h3>
        <Search getArcadeSticks={this.getArcadeSticks} />
        <ArcadeSticks sticks={sticks} />
      </div>
    );
  }
}

export default App;
