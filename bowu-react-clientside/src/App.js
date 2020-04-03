import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ArcadeSticks from './components/ArcadeSticks';
import Reviews from './components/Reviews';

class App extends Component {
  state = {
    sticks: [],
  };

  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/apicall/all`);
    this.setState({ sticks: res.data });
  }

  render() {
    const { sticks, reviews } = this.state;

    return (
      <Router>
        <div className='App'>
          <h1>Block on Wake Up!</h1>
          <br />
          <Route
            exact
            path='/'
            render={(props) => <ArcadeSticks sticks={sticks} />}
          />
          <Route
            exact
            path='/review/:id'
            render={(props) => (
              <Reviews
                {...props}
                getReviews={this.getReviews}
                sticks={sticks}
                reviews={reviews}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
