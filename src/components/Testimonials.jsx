import React from 'react';  
import edu from '../assets/edu.jpg';
import publics from '../assets/publics.jpg';
import kola from '../assets/kola.jpg';
import commu from '../assets/commu.jpg';

const Testimonials = () => {
  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Upcoming Projects</h2>
        <p style={{ color: "black" }}>
          Discover the exciting projects coming up in our district. Stay informed about the latest initiatives and be a part of the community's growth and development.
        </p>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p style={{ color: "black" }}>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The Education Initiative: A project to enhance educational infrastructure and resources. Starting on 15th August.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={edu} className="testimonial-img" alt="Education Project" />
                <h3>Education Initiative</h3>
                <h4>Starting: 15th August</h4>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p style={{ color: "black" }}>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The Community Development Project: Aiming to build community centers and improve local amenities. Starting on 1st September.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={commu} className="testimonial-img" alt="Community Development Project" />
                <h3>Community Development</h3>
                <h4>Starting: 1st September</h4>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p style={{ color: "black" }}>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The Public Spaces Enhancement: Focused on creating more green spaces and recreational areas. Starting on 10th October.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={publics} className="testimonial-img" alt="Public Spaces Enhancement" />
                <h3>Public Spaces Enhancement</h3>
                <h4>Starting: 10th October</h4>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{ filter: "invert(100%)", color: "black" }} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" style={{ filter: "invert(100%)", color: "black" }} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
