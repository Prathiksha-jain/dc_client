import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Styles/Guide.css"; // Assuming this file contains your custom styles
import design from "../assets/design.png";

const Guide = () => {
    return (
        <>
            <h4 className="heading text-center mb-4">How it works ?</h4>
            <div className="divider mb-4"></div>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 guide_container">
                    <div id="Carousel" className="carousel slide mb-6" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h2>Step 1</h2>
                                        <h4>The first step is this</h4>
                                        <p>This is the method you need to follow to correctly download the complete template for the Project FundRaising.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image mb-4">
                                        <img src="https://kettocdn.gumlet.io/media/campaign/896000/896598/image/wid65d81b61c6cda.jpg?w=320&dpr=1.0" alt="" className="content-image" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h2>Step 2</h2>
                                        <h4>The first step is this</h4>
                                        <p>This is the method you need to follow to correctly download the complete template for the Project FundRaising.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image mb-4">
                                        <img src="https://kettocdn.gumlet.io/media/campaign/896000/896598/image/wid65d81b61c6cda.jpg?w=320&dpr=1.0" alt="" className="content-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 list-container">
                    <div className="list-group list-group-flush border-bottom scrollarea">
                        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                            <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                            <span className="fs-5 fw-semibold">List group</span>
                        </a>
                        {/* Placeholder list items */}
                        <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <strong className="mb-1">List group item heading</strong>
                                <small>Wed</small>
                            </div>
                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <strong className="mb-1">List group item heading</strong>
                                <small className="text-body-secondary">Wed</small>
                            </div>
                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <strong className="mb-1">List group item heading</strong>
                                <small className="text-body-secondary">Wed</small>
                            </div>
                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <strong className="mb-1">List group item heading</strong>
                                <small className="text-body-secondary">Wed</small>
                            </div>
                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <strong className="mb-1">List group item heading</strong>
                                <small className="text-body-secondary">Wed</small>
                            </div>
                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guide;
