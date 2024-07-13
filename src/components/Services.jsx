/* eslint-disable no-unused-vars */
import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Services</h2>
        <p style={{ color: "black" }}>
          Explore various avenues where funding can make a difference in education, public infrastructure, healthcare, and community events. Each opportunity plays a crucial role in enhancing lives and communities, shaping a better future for all.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"><a href="">Education</a></h4>
            <p className="description">Investing in education to empower minds and shape tomorrow's leaders.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><a href="">Public Infrastructure</a></h4>
            <p className="description">Supporting projects that improve public services and infrastructure.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><a href="">Healthcare</a></h4>
            <p className="description">Advancing healthcare solutions for better community well-being and quality of life.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="">Events in the Region</a></h4>
            <p className="description">Raising funds for local events to enrich community culture and engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
