import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    this.getReviews(this.props.match.params.id);
  }

  getReviews = async (stickid) => {
    const res = await axios.get(
      `http://localhost:5000/apicall/review/${stickid}`
    );
    console.log('stick review query: ', res);
    this.setState({ reviews: res.data });
  };

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <h1>Review</h1>
        {reviews.map((review) => (
          <>
            <h2>{review.revtitle}</h2>
            <h3>{review.review}</h3>
          </>
        ))}
        <Link to='/' className=''>
          Return to Sticks
        </Link>
      </div>
    );
  }
}

export default Reviews;
