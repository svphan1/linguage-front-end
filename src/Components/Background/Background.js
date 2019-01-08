import React from 'react';
import image from '../../assets/linguage.jpg';
import Button from '@material-ui/core/Button';
import './Background.css';

const Background = () => {
  return (
    <React.Fragment>
      <img src={image} alt='background image'/>
      <Button className="btn-started">Get Started</Button>
    </React.Fragment>
  )
};

export default Background;