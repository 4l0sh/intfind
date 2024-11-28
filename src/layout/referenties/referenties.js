import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./referenties.css";
import Steps from "../steps/steps";

function Referenties() {
  const navigate = useNavigate();

  // Functie om terug te navigeren
  const redirectToExperience = () => {
    navigate("/experience"); // Pas de route aan naar de juiste vorige pagina
  };

  return (
    <div>
      <div className="container">
        <div className="box1">
          <i
            onClick={redirectToExperience} // Actie bij klikken op linker pijl
            className="fa-solid fa-arrow-left arrow-left"
          ></i>
          <p> Previous</p>
        </div>
        <div className="box2">
          <Steps currentStep={5} />
          <div className="title">
            <h1>Referenties</h1>
          </div>
          <div className="referentieDiv">
            <form className="referentieForm" id="referentiesForm">
              <input
                type="text"
                className="persoon"
                placeholder="Persoon"
                required
              ></input>
              <input
                type="text"
                className="beroep"
                placeholder="Beroep"
                required
              ></input>
              <textarea
                type="text"
                className="referentieText"
                placeholder="Referentie Text"
                required
              ></textarea>
              <input type="submit" className="submit"></input>
            </form>
          </div>
        </div>
        <div className="box3"></div>
      </div>
    </div>
  );
}

export default Referenties;
