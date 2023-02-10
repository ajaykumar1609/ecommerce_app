import React from "react";
import Product from "./Product";
import "./Home.css";
import ImageSlider from "./ImageSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  "avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg",
  "avatar3.webp",
  "avatar2.jpeg",
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
          <ImageSlider images={images} />
          {/* <img className="home_image" src="avatar-the-way-of-water-4k-wallpaper-uhdpaper.com-91@1@h.jpg" alt="avatar"/> */}
          <div className="home_row">
            <Product
              id="12345678"
              image="/toppng.com-apple-watch-band-tahoe-blue-445x507.png"
              title="Smart watch"
              price={1500.0}
              rating={5}
            />
            <Product
              id="987654321"
              image="/kisspng-shoe-footwear-boot-sneakers-moccasin-sensorflex-comfort-system-timberland-korea-5b66dc1172c520.0413246815334676654701.png"
              title="Sneakers"
              price={69990.0}
              rating={5}
            />
            <Product
              id="987654321"
              image="/toppng.com-fuji-x100s-photo-camera-2600x2004.png"
              title="dslr camera"
              price={69990.0}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="124536789"
              image="/toppng.com-beyer-dynamic-sideview-headphones-871x1200.png"
              title="headphones"
              price={690.0}
              rating={5}
            />
            <Product
              id="124357689"
              image="/toppng.com-cashews-big-250-gms-cashew-574x380.png"
              title="Cashew nuts(250g)"
              price={2999.0}
              rating={5}
            />
            <Product
              id="987654321"
              image="/pngimg.com - strawberry_PNG2630.png"
              title="strawberries"
              price={69990.0}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="123256789"
              image="/toppng.com-strasburg-glasses-960x341.png"
              title="sun glasses"
              price={1500.0}
              rating={5}
            />
            <Product
              id="123456879"
              image="/toppng.com-water-bottle-351x1348.png"
              title="water bottle"
              price={69.0}
              rating={5}
            />
            {/* <Product
              id="987654321"
              image="pm1.jpeg"
              title="dslr camera"
              price={69990.0}
              rating={5}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
