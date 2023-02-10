import React, { useState } from "react";
import './ImageSlider.css'
const sliderData = [
  {
    id: 1,
    image: "/12873507_Set_of_Shoes_Doodles.jpg",
    text: "Deal of the day 50% off on all shoes",
  },
  {
    id: 2,
    image: "/groceries.avif",
    text: "Fresh groceries with Flat 10%  off",
  },
  {
    id: 3,
    image: "/pm3.jpeg",
    text: "30% Flat off on all watches above 2000/-",
  },
];

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((currentSlide + sliderData.length - 1) % sliderData.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % sliderData.length);
  };

  return (
    <div className="image-slider">
    <div className="slider-text">{sliderData[currentSlide].text}</div>
      <div
        className="slider-image"
        style={{
          backgroundImage: `url(${sliderData[currentSlide].image})`,
        }}
      />
      
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
      <div
        className="prev-slide"
        style={{
          backgroundImage: `url(${
            sliderData[(currentSlide + sliderData.length - 1) % sliderData.length]
              .image
          })`,
        }}
      />
      <div
        className="next-slide"
        style={{
          backgroundImage: `url(${
            sliderData[(currentSlide + 1) % sliderData.length].image
          })`,
        }}
      />
    </div>
  );
}

export default ImageSlider;
