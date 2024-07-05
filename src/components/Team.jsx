/* eslint-disable no-unused-vars */
import React from "react";
import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";

const Team = () => {
  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Team</h2>
        <p style={{ color: "black" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="fade-up">
            <div className="pic">
              <img src={team2} className="img-fluid" alt="" />
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="fade-up" data-aos-delay="150">
            <div className="pic">
              <img src={team1} className="img-fluid" alt="" />
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="fade-up" data-aos-delay="300">
            <div className="pic">
              <img src={team3} className="img-fluid" alt="" />
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
