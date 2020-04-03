import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ArcadeSticks from './components/ArcadeSticks';

class App extends Component {
  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/apicall/all`);
    console.log('axios data: ', res.data);
    this.setState({ sticks: res.data });
  }

  state = {
    sticks: [],
    review: []
  };

  render() {
    const { sticks } = this.state;

    return (
      <div className='App'>
        <h1>Block on Wake Up!</h1>
        <h2>Arcade Sticks</h2>
        <br />
        <ArcadeSticks sticks={sticks} />
      </div>
    );
  }
}

export default App;
