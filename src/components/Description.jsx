import React from 'react';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../Styles/style.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footers.jsx';
import kola from '../assets/kola.jpg';
import edu from '../assets/edu.jpg';

const Description = () => {
  return (
    <>
      <header id="header" className="head fixed-top header-transparent">
        <Header />
      </header>

      <section
        id="title"
        style={{
          width: "100%",
          height: "60vh",
          background: `linear-gradient(rgba(55, 142, 181, 0.5), rgba(55, 142, 181, 0.2)), url(${kola}) top center`,
          backgroundSize: "cover",
          position: "relative",
          marginBottom: "-90px"
        }}
      >
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-primary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          </div>
        </div>
      </section>

      <main className="container">
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p style={{ color: "black" }}>
                        <img src={kola} className="images" alt="" style={{ width: "100%" }} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p style={{ color: "black" }}>
                        <img src={edu} className="images" alt="" style={{ width: "100%" }} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p style={{ color: "black" }}>
                        <img src={kola} className="images" alt="" style={{ width: "100%" }} />
                      </p>
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
        </section>

        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1" style={{ color: "black" }}>Sample blog post</h2>
              <p className="blog-post-meta" style={{ color: "black" }}>January 1, 2021 by</p>
              <p style={{ color: "black" }}>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
              <hr />
              <p style={{ color: "black" }}>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h2>Blockquotes</h2>
              <p style={{ color: "black" }}>This is an example blockquote in action:</p>
            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
              <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '2rem' }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-body p-5">
                    <h2 className="fw-bold mb-0">Help in making a difference</h2>

                    <ul className="d-grid gap-4 my-5 list-unstyled small">
                      <li className="d-flex gap-4">
                        <div>
                          <h5 className="mb-0">Days Left</h5>
                          7 days left to end.
                        </div>
                      </li>
                    </ul>
                    <div className="progress">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                         2,000
                      </div>
                    </div>
                    <span>Target: 10,000</span>
                    <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">
                      Donate Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Description;
