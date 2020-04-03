import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StickItem = ({ stick: { title } }) => {
  return (
    <div className='card text-center'>
      <img src='' alt='' className='' style={{ width: '60px' }} />
      <h3>{title}</h3>
    </div>
  );
};

StickItem.propTypes = {
  stick: PropTypes.object.isRequired
};

export default StickItem;
