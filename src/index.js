import React from 'react';
import ReactDOM from 'react-dom';
import Bomb from 'bomb';
import ImageSlider from './ImageSlider';


ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);
