// import React from 'react'
import sliderOne from "../../assets/images/img_bg_1-PzvG2r05.jpg";
import sliderTwo from "../../assets/images/img_bg_2-DzCs5o-0.jpg"
export default function Home() {
  return (
    <>
    <header className="vh-100 d-flex justify-content-center align-items-center">
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sliderOne} className="d-block w-100" alt="slideone" />
    </div>
    <div className="carousel-item">
      <img src={sliderTwo} className="d-block w-100" alt="sliderTwo" />
    </div>
  </div>
</div>


    </header>


</>
  );
}
