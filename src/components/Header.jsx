// Header.jsx

import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("hero"); // Set default active link

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50; // Adjusted for header height

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar" style={{padding:"0" }}>
      <div
        className="container  align-items-center justify-content-between "
        style={{padding:"0" }}
      >
        <div className="logo">
          <h1 className="text-light">
            <a href="/">
              <span style={{fontSize: "20px"}}>Crowd Funding</span>
            </a>
          </h1>
        </div>

        <ul>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "hero" ? "active" : ""
              }`}
              href="#hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "about" ? "active" : ""
              }`}
              href="#about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              href="#portfolio"
            >
              Donate Funds
            </a>
          </li>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "how" ? "active" : ""
              }`}
              href="#how"
            >
              Raise Fund
            </a>
          </li>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "services" ? "active" : ""
              }`}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "team" ? "active" : ""
              }`}
              href="#team"
            >
              Team
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          {/* <li className="dropdown megamenu">
            <a href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <strong>Column 1</strong>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li>
                <strong>Column 2</strong>
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <strong>Column 3</strong>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <strong>Column 4</strong>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
              <li>
                <strong>Column 5</strong>
                <a href="#">Column 5 link 1</a>
                <a href="#">Column 5 link 2</a>
                <a href="#">Column 5 link 3</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a
              className={`nav-link scrollto ${
                activeLink === "contact" ? "active" : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </div>
    </nav>
  );
};

export default Header;
