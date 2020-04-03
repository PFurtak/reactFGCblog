import React from 'react';
import StickItem from './StickItem';
import PropTypes from 'prop-types';

const ArcadeSticks = ({ sticks }) => {
  return (
    <div style={sticksStyle}>
      {sticks.map(stick => (
        <StickItem key={stick.id} stick={stick} />
      ))}
    </div>
  );
};

ArcadeSticks.propTypes = {
  sticks: PropTypes.array.isRequired
};

const sticksStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default ArcadeSticks;
