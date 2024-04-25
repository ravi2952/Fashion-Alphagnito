import React from "react";
import "./Catalog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../../assets/pexels-alexandra-maria-336372.jpg';
import Img2 from '../../../assets/pexels-andrea-piacquadio-845434.jpg';
import Img3 from '../../../assets/pexels-evg-kowalievska-1055691.jpg';
import Img4 from '../../../assets/pexels-juan-mendez-1536619.jpg';
import Img5 from '../../../assets/pexels-lumn-322207.jpg';
import Img6 from '../../../assets/pexels-pixabay-247204.jpg';
import Img7 from '../../../assets/pexels-snack-toronto-1630344.jpg';
import Img8 from '../../../assets/pexels-spencer-selover-428338.jpg';
import Img9 from '../../../assets/pexels-terje-sollie-298863.jpg';

export default function Catalog() {
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      };
      return (
        <div className="container">
            <div className="Card">
              <div className="card-heading">
                <h1>Catalog</h1>
              </div>
        <Slider {...settings}>
          <div className="Card-item">
            <img src={Img1} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img2} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img3} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img4} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img5} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img6} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img7} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img8} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="Card-item">
            <img src={Img9} alt="" />
            <div className="card-content">
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Slider>
        </div>
        </div>
      );
}
