import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Reviews extends Component {
  componentDidMount() {
    this.props.getReviews(this.props.match.params.id);
  }
  static propTypes = {
    getReviews: PropTypes.func.isRequired
  };

  render() {
    const { revtitle, review } = this.props.reviews;

    return (
      <div>
        <h1>Review</h1>
        <h2>{revtitle}</h2>
        <h3>{review}</h3>
        <Link to='/' className=''>
          Return to Sticks
        </Link>
      </div>
    );
  }
}

export default Reviews;
