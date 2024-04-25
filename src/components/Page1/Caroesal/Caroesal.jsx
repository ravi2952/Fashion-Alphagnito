import React from "react";
import "./Caroesal.css";
import Cimg1 from "../../../assets/Untitled design (5).png";
import Cimg2 from "../../../assets/Untitled design (1).png";
import Cimg3 from "../../../assets/Untitled design (2).png";
import Cimg4 from "../../../assets/Untitled design (6).png";
import Cimg5 from "../../../assets/Untitled design (7).png";
import Cimg6 from "../../../assets/Untitled design (3).png";
import Cimg7 from "../../../assets/Untitled design (4).png";

export default function Caroesal() {
  return (
    <div className="container">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={Cimg7} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Cimg6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cimg5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cimg4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cimg3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cimg2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cimg1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
