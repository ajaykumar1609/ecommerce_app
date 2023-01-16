import React from "react";
import Product from "./Product";
import "./Home.css";
import ImageSlider from "./ImageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  "avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg",
  "avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg",
  "avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg",
];
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      {/* <ImageSlider /> */}
      <div className="home">
        <div className="home_container">
          {/* <div>
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
          </div> */}
          <ImageSlider images={images}/>
          {/* <img className="home_image" src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt="avatar"/> */}
          <div className="home_row">
            <Product
              id="12345678"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
            <Product
              id="987654321"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="124536789"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
            <Product
              id="124357689"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
            <Product
              id="123456879"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="123256789"
              image="hair_dryer.webp"
              title="hair dryer"
              price={69.69}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
