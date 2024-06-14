import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap's JavaScript
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const HeaderBar = () => {
  return (
    <header className="p-3 mb-0 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <img
                height="50"
                width="50"
                margin="5px"
                id="logo_left"
                src="https://cdn.s3waas.gov.in/s33a835d3215755c435ef4fe9965a3f2a0/uploads/2018/07/2018072898.png"
                alt="GoK"
              />
            </li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis small">Inventory</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis small">Customers</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis small">Products</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-sm" placeholder="Search..." aria-label="Search"/>
          </form>

          <div className="dropdown text-end">
            <img 
              src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.0" 
              alt="Profile" 
              width="100" 
              height="40" 
              className="rounded-circle" 
              style={{ objectFit: "fill", borderRadius: "50%" }} 
            />
            <button className="btn link-body-emphasis text-decoration-none dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end text-small" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
