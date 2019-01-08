import React from 'react';
import image from '../../assets/linguage.jpg';
import './Background.css';

const Background = () => {
  return (
    <React.Fragment>
      <img src={image} alt='background image'/>
    </React.Fragment>
  )
};

export default Background;