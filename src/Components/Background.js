import React from 'react';
import image from '../assets/globe-map.png';
import './style.css';

const Background = () => {
  return (
    <React.Fragment>
      <img src={image} alt='background image'/>
    </React.Fragment>
  )
};

export default Background;