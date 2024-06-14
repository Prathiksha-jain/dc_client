import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const prev = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };
  return (
    <div id="img">
      <div className="containers">
        <div className="slide">
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/NSwVv8D/img3.jpg) ",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/jTQfmTq/img5.jpg)",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              background: "url(https://i.ibb.co/RNkk6L0/img6.jpg)",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev" onClick={prev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next" onClick={next}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
