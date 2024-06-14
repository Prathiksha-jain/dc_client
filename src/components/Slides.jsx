
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Slides.css';

const Slides = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // Enable center mode
        centerPadding: '0%', // Adjust center padding as needed
        responsive: [
            {
                breakpoint: 768, // Adjust breakpoint for responsiveness
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false // Disable center mode on smaller screens
                }
            }
        ]
    };

    return (
        
        <>
        <div className="carousel-wrapper">
            
            <Slider {...settings}>
                    <div className="slide-item">
                        <div className="row">
                            <div className="col-5"> <img src="https://kettocdn.gumlet.io/media/campaign/896000/896598/image/wid65d81b61c6cda.jpg?w=320&dpr=1.0" alt="Slide 2" /></div>
                            <div className="col-7"> Text for the image andthedetail of the image</div>
                        </div>
                    </div>

                    <div className="slide-item">
                        <div className="row">
                            <div className="col-5"> <img src="https://kettocdn.gumlet.io/media/campaign/896000/896598/image/wid65d81b61c6cda.jpg?w=320&dpr=1.0" alt="Slide 2" /></div>
                            <div className="col-7"> Text for the image andthedetail of the image</div>
                        </div>
                    </div>

                    <div className="slide-item">
                        <div className="row">
                            <div className="col-5"> <img src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.0" alt="Slide 3" /></div>
                            <div className="col-7"> Text for the image andthedetail of the image</div>
                        </div>
                       
                    </div>

            </Slider>
            
        </div>
</>
    );
}

export default Slides;


