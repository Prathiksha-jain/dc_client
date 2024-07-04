import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-next"
      style={{
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        right: "-50px",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-prev"
      style={{
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        left: "-50px",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
    </div>
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

const sliderSettings = {
  dots: false, // Disable dots
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true, // Enable arrows for navigation
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false // Ensure dots are disabled in responsive settings
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false // Ensure dots are disabled in responsive settings
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false // Ensure dots are disabled in responsive settings
      }
    }
  ]
};

const SuccessStories = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvents();

    // Load Masonry script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js";
    script.integrity = "sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Masonry after script is loaded
      const Masonry = window.Masonry;
      if (Masonry) {
        new Masonry('.masonry-grid', {
          itemSelector: '.masonry-item',
          percentPosition: true
        });
      }
    };

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getEvents = async () => {
    let response = await fetch(`http://localhost:2000/users/getApprovedData`);
    let result = await response.json();
    if (result) {
      setEvent(result);
    }
    console.log("Fetched events:", result);
  }

  console.log("Current events state:", event);

  return (
    <>
      <div className="container position-relative">
        <h4 className="heading text-center mb-4">Glimpse of Success Stories</h4>
        <div className="divider mb-5"></div>
        <Slider {...sliderSettings}>
          {event?.length > 0 && event.map(event => (
            <div key={event.id} style={{ padding: "0 10px" }}> {/* Add padding for spacing */}
              <div className="card" style={{
                backgroundImage: event.imagePath && event.imagePath.length > 0 ? `url("${event.imagePath[0]}")` : "none",
                backgroundColor: event.imagePath && event.imagePath.length > 0 ? "transparent" : "black",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: "10px",
                height: "300px"
              }}>
                <div className="card-body text-dark">
                  <h5 className="card-title fw-bold text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>{event.name}</h5>
                  <p className="card-text p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", lineHeight: "1.2em", maxHeight: "2.4em", overflow: "hidden" }}>{event.description}</p>
                  <p className="card-text"><small className="text-body-primary">{event.sdate}</small></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SuccessStories;
