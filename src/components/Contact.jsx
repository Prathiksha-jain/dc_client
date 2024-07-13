/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact</h2>
        <p style={{color:"black"}}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="info-box mb-4">
            <i className="bx bx-map"></i>
            <h3>Our Address</h3>
            <p style={{color:"black"}}>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box mb-4">
            <i className="bx bx-envelope"></i>
            <h3>Email Us</h3>
            <p style={{color:"black"}}>contact@example.com</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box mb-4">
            <i className="bx bx-phone-call"></i>
            <h3>Call Us</h3>
            <p style={{color:"black"}}>+1 5589 55488 55</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <iframe
            className="mb-4 mb-lg-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3719802292076!2d74.83289117513247!3d12.861060837444267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bac4fbefcc7%3A0xfc0d1557e07f1a70!2sDistrict%20Collector%20Office%2C%20Bunder%2C%20Mangaluru%2C%20Karnataka%20575001%2C%20India!5e1!3m2!1sen!2sus!4v1720673348070!5m2!1sen!2sus"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '384px' }}
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>

        <div className="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
