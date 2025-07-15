import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="carousel-outer">
        <div className="carousel-image-area">
          <img className="carousel-image active" src={images[0].src} alt={images[0].alt} />
        </div>
      </div>
    );
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const goToIndex = (idx) => setCurrentIndex(idx);

  return (
    <div className="carousel-outer">
      <div className="carousel-image-area">
        <button className="carousel-btn prev-btn" onClick={showPrev}>&lt;</button>
        {images.map((img, i) => (
          <img
            key={i}
            className={`carousel-image${i === currentIndex ? ' active' : ''}`}
            src={img.src}
            alt={img.alt}
            style={{ display: i === currentIndex ? 'block' : 'none' }}
          />
        ))}
        <button className="carousel-btn next-btn" onClick={showNext}>&gt;</button>
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot${i === currentIndex ? ' active' : ''}`}
            onClick={() => goToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 