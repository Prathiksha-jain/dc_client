import React from "react";
import kola from '../assets/kola.jpg';
import money from '../assets/money.jpg';
import commu from '../assets/commu.jpg';
import heart from '../assets/heart.jpg';
import invest from '../assets/invest.jpg';
import donate from '../assets/donate.jpg';
import donate1 from '../assets/donate1.jpg';
const About = () => {
  return (
    <>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          backgroundImage: `url(${donate1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '20px',
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            About Us
          </h3>
          <button className="btn btn-donate mt-auto">Why Join Us</button>
        </div>
      </div>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="feature-item d-flex flex-column align-items-center gap-2">
              <div className="feature-image rounded-circle overflow-hidden" style={{
                backgroundImage: `url(${money})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <svg className="bi" width="5em" height="5em">
                  <use xlinkHref="#collection"></use>
                </svg>
              </div>
              <h6 className=" mb-0 text-body-emphasis">No middle person</h6>
              <p className="text-body-secondary" style={{textAlign:'center'}}>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          <div className="col">
            <div className="feature-item d-flex flex-column align-items-center gap-2">
              <div className="feature-image rounded-circle overflow-hidden" style={{
                backgroundImage: `url(${commu})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <svg className="bi" width="5em" height="5em">
                  <use xlinkHref="#collection"></use>
                </svg>
              </div>
              <h6 className=" mb-0 text-body-emphasis">Community</h6>
              <p className="text-body-secondary" style={{textAlign:'center'}}>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          <div className="col">
            <div className="feature-item d-flex flex-column align-items-center gap-2">
              <div className="feature-image rounded-circle overflow-hidden" style={{
                backgroundImage: `url(${heart})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <svg className="bi" width="5em" height="5em">
                  <use xlinkHref="#collection"></use>
                </svg>
              </div>
              <h6 className=" mb-0 text-body-emphasis">We maintain transparency</h6>
              <p className="text-body-secondary" style={{textAlign:'center'}}>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          <div className="col">
            <div className="feature-item d-flex flex-column align-items-center gap-2">
              <div className="feature-image rounded-circle overflow-hidden" style={{
                backgroundImage: `url(${invest})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <svg className="bi" width="5em" height="5em">
                  <use xlinkHref="#collection"></use>
                </svg>
              </div>
              <h6 className=" mb-0 text-body-emphasis">Best investment</h6>
              <p className="text-body-secondary" style={{textAlign:'center'}}>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
