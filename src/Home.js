import React from "react";
import Product from "./Product";
import "./Home.css";
import ImageSlider from "./ImageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:5000,
  };
  return (
    <div>
      {/* <ImageSlider /> */}
      <div className="home">
        <div className="home_container">
          <div>
            <Slider className="is_Slider" {...settings}>
              <div className="imageslider">
                <img
                  src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg"
                  alt="avatar"
                />
              </div>
              <div className="imageslider">
                <img
                  src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg"
                  alt="avatar"
                />
              </div>
              <div className="imageslider">
                <img
                  src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg"
                  alt="avatar"
                />
              </div>
            </Slider>
          </div>
          {/* <img className="home_image" src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt="avatar"/> */}
          <div className="home_row">
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              image="hair_dryer.webp"
              title="hair dryer"
              price="69.69"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
