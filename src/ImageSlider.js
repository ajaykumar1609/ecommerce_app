import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;
  const [isPlaying, setIsPlaying] = useState(true);
  
  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  }
  
  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    } else if (!isPlaying && interval !== null) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="image-slider">
      <div className="image-slider-container">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
        />
      </div>
      <div className="image-slider-buttons">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
        {/* <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button> */}
      </div>
      <div className="image-slider-dots">
        {images.map((image, index) => (
          <span 
            key={index} 
            className={`image-slider-dot ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
