import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "./btn";

const Experience = () => {
  const navigate = useNavigate();
  const redirectToOpleiding = () => {
    navigate("/opleiding");
  };

  const redirectToReferenties = () => {
    navigate("/referenties");
  };
  return (
    <Fragment>
      <div className="container">
        <div className="box1">
          <i
            onClick={redirectToOpleiding}
            className="fa-solid fa-arrow-left arrow-left"
          ></i>
          <p> Previous</p>
        </div>
        <div className="box2">
          <div className="title">
            <h1>Work experience</h1>
          </div>
          <div>
            <Btn />
          </div>
        </div>
        <div className="box3">
          <i
            onClick={redirectToReferenties}
            className="fa-solid fa-arrow-right arrow-right"
          ></i>
          <p>Next</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
