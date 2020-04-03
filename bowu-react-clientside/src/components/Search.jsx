import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getArcadeSticks(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Arcade Sticks'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' value='Search' className='' />
        </form>
        <br />
      </div>
    );
  }
}

export default Search;
