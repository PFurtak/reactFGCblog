import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Reviews extends Component {
  async componentDidMount() {
    this.props.getReviews(this.props.match.params.id);
  }
  static propTypes = {
    getReviews: PropTypes.func.isRequired,
  };

  render() {
    const { revtitle, review, reviews } = this.props.reviews;
    console.log('reviews not indexed :', reviews);
    console.log('reviews by index [0]', this.props.reviews[0]);

    return (
      <div>
        <h1>Reviews</h1>
        <h2></h2>
        <h3></h3>
        <Link to='/' className=''>
          Return to Sticks
        </Link>
      </div>
    );
  }
}

export default Reviews;
