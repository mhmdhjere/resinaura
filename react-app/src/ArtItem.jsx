import React from 'react';
import Carousel from './Carousel';

const ArtItem = ({ title, description, images }) => (
  <div className="art-item">
    <Carousel images={images} />
    <div className="description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default ArtItem; 