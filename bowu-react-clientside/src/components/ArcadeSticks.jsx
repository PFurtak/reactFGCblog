import React from 'react';
import StickItem from './StickItem';
import PropTypes from 'prop-types';

const ArcadeSticks = ({ sticks }) => {
  return (
    <div>
      <h2>Arcade Sticks</h2>

      <div style={sticksStyle}>
        {sticks.map(stick => (
          <StickItem key={stick.id} stick={stick} />
        ))}
      </div>
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
