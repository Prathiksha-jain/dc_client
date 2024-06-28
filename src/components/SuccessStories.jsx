import React, { useEffect, useState } from "react";
import kola from '../assets/kola.jpg';
import publics from '../assets/publics.jpg'; 
import health from '../assets/health.jpg';
import edu from '../assets/edu.jpg';

const SuccessStories = () => {
    const [event , setEvent] = useState([]);

    const headingStyle = {
        backgroundColor: "#add8e6", // Set background color to light blue
        padding: "20px 0", // Adjust padding as needed
        textAlign: "center", // Center align text
        marginBottom: "20px", // Example margin bottom
    };

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

    const getEvents = async () =>{
        let response = await fetch(`http://localhost:2000/users/getApprovedData`);
        let result = await response.json();
        if(result){
            setEvent(result);
        }
        console.log(event);
    }

    return (
        <>
            <div className="container">
                <h4 className="heading text-center mb-4">Glimpse of Success Stories</h4>
                <div className="divider mb-5"></div>
            </div>

            <div className="row masonry-grid" style={{ position: "relative" }}>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "0%", top: "0px" }}>
                {event?.length > 0 && (<>
                    <div className="card" style={{ backgroundImage: `url("${event[0].imagePath[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="card-body text-dark" key={event[0].id}>
                            <h5 className="card-title fw-bold text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>{event[0].name}</h5>
                            <p className="card-text">{event[0].description}</p>
                            <p className="card-text"><small className="text-body-primary">{event[0].sdate}</small></p>
                        </div>
                    </div>
                    </>
                            )}
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "50%", top: "0px" }}>
                    <div className="card p-3">
                        <figure className="p-3 mb-0">
                            <blockquote className="blockquote">
                                <p className="text-dark">A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0 text-body-secondary">
                                Someone famous in <cite title="Source Title" className="text-dark">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "50%", top: "201.17px" }}>
                    <div className="card" style={{ backgroundImage: `url(${publics})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="card-body text-dark">
                            <h5 className="card-title fw-bold text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-body-primary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "0%", top: "386.205px" }}>
                    <div className="card text-bg-primary text-center p-3">
                        <figure className="mb-0">
                            <blockquote className="blockquote">
                                <p className="text-dark">A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0 text-white">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "0%", top: "525.396px" }}>
                    <div className="card" style={{ backgroundImage: `url(${edu})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="card-body text-dark">
                            <h5 className="card-title fw-bold text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>Card title</h5>
                            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                            <p className="card-text"><small className="text-body-primary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "50%", top: "579.371px" }}>
                    <div className="card" style={{ backgroundImage: `url(${health})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="card-body text-dark">
                            <h5 className="card-title fw-bold text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px" }}>Card title</h5>
                            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                            <p className="card-text"><small className="text-body-primary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4 masonry-item" style={{ position: "absolute", left: "0%", top: "703.597px" }}>
                    <div className="card p-3 text-end">
                        <figure className="mb-0">
                            <blockquote className="blockquote">
                                <p className="text-dark">A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0 text-body-secondary">
                                Someone famous in <cite title="Source Title" className="text-dark">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default SuccessStories;
