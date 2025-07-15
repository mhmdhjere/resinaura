import React, { useState } from 'react';
import './PerfumePage.css';
import bottleImage from '../images/1.jpg'; // replace with your images

// Sample data - replace with your actual images and data
const perfumes = [
  {
    image: bottleImage,
    title: 'Romantic',
    subtitle: 'Dawn',
    volume: '100 ml',
    price: '399$',
    description: '"Romantic Dawn" is a scent that will transport you to a world of romantic feelings and the beauty of nature. The combination of fresh and delicate lilac with warm and sweet peony creates a bright and memorable fragrance. It is suitable for any time of the year and for any occasion – from meeting with friends to a romantic date.'
  },
  {
    image: bottleImage, // Replace with second image
    title: 'Mystic',
    subtitle: 'Night',
    volume: '100 ml',
    price: '449$',
    description: 'Experience the mystery of the night with this enchanting fragrance that combines deep amber notes with delicate florals.'
  },
  {
    image: bottleImage, // Replace with third image
    title: 'Ocean',
    subtitle: 'Breeze',
    volume: '100 ml',
    price: '379$',
    description: 'Fresh and invigorating, this scent captures the essence of ocean waves and sea salt air.'
  }
];

export default function PerfumePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPerfume = perfumes[currentIndex];

  return (
    <div className="perfume-page">
      <div className="perfume-image-container">
        <img 
          src={currentPerfume.image} 
          alt={`${currentPerfume.title} ${currentPerfume.subtitle} Perfume`} 
          className="perfume-image" 
        />
        <div className="carousel-dots">
          {perfumes.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="perfume-text">
        <h1 className="perfume-title">
          {currentPerfume.title} <br /> 
          <span>{currentPerfume.subtitle}</span>
        </h1>

        <div className="perfume-info">
          <span>MENU</span>
          <span>{currentPerfume.volume}</span>
          <span>BUY {currentPerfume.price}</span>
        </div>

        <p className="perfume-description">
          {currentPerfume.description}
        </p>
      </div>
    </div>
  );
}