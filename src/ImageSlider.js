import React from "react";
import Slider from "react-slick";
import './ImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:5000
  };
  return (
    <Slider className="is_Slider" {...settings}>
      <div className="imageslider">
        <img src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt='avatar'/>
      </div>
      <div className="imageslider">
        <img src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt='avatar'/>
      </div>
      <div className="imageslider">
        <img src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt='avatar'/>
      </div>
      <div className="imageslider">
        <img src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt='avatar'/>
      </div>
    </Slider>
  );
}