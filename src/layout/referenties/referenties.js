import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./referenties.css";

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
          <div className="steps-container">
            <div className="step not-filled">
              <i className="fa-solid fa-1"></i>
            </div>
            <div className="step not-filled">
              <i className="fa-solid fa-2"></i>
            </div>
            <div className="step not-filled">
              <i className="fa-solid fa-3"></i>
            </div>
            <div className="step filled">
              <i className="fa-solid fa-4"></i>
            </div>
          </div>
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
