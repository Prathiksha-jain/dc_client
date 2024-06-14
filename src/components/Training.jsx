import React from "react";
import "../index.css";
import { Card, CardBody } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
const training = () => {
  return (
    
    <div className="training">
      <div className="content d-flex flex-column">
        <div
          className="d-flex align-items-center text-white"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "normal",
            fontSize: "18",
          }}
        >
          <FontAwesomeIcon icon={faFire} />
          <span className="ml-2 text-white">JOIN THE NEW RESOLUTION</span>
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "55px",
          }}
        >
          <span className="ml-2 text-white">TRAINING IN DAKSHINA KANNADA</span>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "20",
            color: "black",
          }}
        >
          Education is the cornerstone of society, and nurturing the minds of
          our school-going students is paramount. Let us illuminate their path
          with the light of knowledge, shaping them into not just bright
          individuals, but compassionate and capable leaders of tomorrow.
        </div>
      </div>
      <div className="d-flex card-head">
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
        <Card className="card">
          <img src="../src/assets/Aiet-College.jpg" />
          <CardBody>Alvas Institute of Engineering And Technology</CardBody>
        </Card>
      </div>
    </div>
  );
};

export default training;
