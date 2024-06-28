import React from "react";
import '../Styles/Upcoming.css';
import kola from '../assets/kola.jpg';
import publics from '../assets/publics.jpg';
import health from '../assets/health.jpg';
import edu from '../assets/edu.jpg';

const Upcoming = () => {
    return (
        <>
            <div className="testimonial-section" style={{ background: 'linear-gradient(135deg, #007bff 20%, #6610f2 30%)' }}>
                <h4 className="heading text-center mb-0">Upcoming Events</h4>
                <div className="divider mb-3"></div>

                <div className=" mb-2">
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className=""></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={health} className="d-block w-100" style={{ maxWidth: '50%', maxHeight: '300px', margin: '0 auto' }} alt="Slide 1" />
                                <div className="carousel-caption d-none d-sm-block ">
                                    <h5>Example headline.</h5>
                                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Read more</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={edu} className="d-block w-100" style={{ maxWidth: '50%', maxHeight: '300px', margin: '0 auto' }} alt="Slide 2" />
                                <div className="carousel-caption d-none d-sm-block">
                                    <h5>Another example headline.</h5>
                                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upcoming;
