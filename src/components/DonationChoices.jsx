import React from "react";
import kola from '../assets/kola.jpg';
import publics from '../assets/publics.jpg';
import health from '../assets/health.jpg';
import edu from '../assets/edu.jpg';
import hand from '../assets/hand.png';

const DonationChoices = () => {
  return (
    <div className="px-4 py-5" id="custom-cards" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${publics})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2 className="pb-2 border-bottom">Join the revolution!</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${kola})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                EVENTS
              </h3>
              <button className="btn btn-donate mt-auto">Donate Now</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${publics})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                PUBLIC SPACES
              </h3>
              <button className="btn btn-donate mt-auto">Donate Now</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${health})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                HEALTH
              </h3>
              <button className="btn btn-donate mt-auto">Donate Now</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${edu})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                EDUCATION
              </h3>
              <button className="btn btn-donate mt-auto">Donate Now</button>
            </div>
          </div>
        </div>

        <div className="col">
      <div className="h-100 overflow-hidden bg-transparent rounded-4 ">
        <div className="icon-box active d-flex flex-column align-items-center justify-content-center">
          <figure className="d-flex justify-content-center">
            <img src={hand} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </figure>
          <header className="entry-header text-center">
            <h3 className="entry-title">Become a Volunteer</h3>
          </header>
          <div className="entry-header text-center" >
            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
          </div>
        </div>
      </div>
    </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${publics})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                OTHER
              </h3>
              <button className="btn btn-donate mt-auto">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-donate {
          background-color: #0892d0;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .btn-donate:hover {
          background-color: #e64a19;
        }
      `}</style>
    </div>
  );
};

export default DonationChoices;
