import React, { useEffect, useState } from "react";

import "./funnel.css";
const Funnel001 = (props) => {
  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const funnel_name = document.getElementById("funnel_name");
    const funnel_Sitz = document.getElementById("funnel_Sitz");
    cambiarMensaje(6);
    if (!funnel_name.value) {
      setShow(true);
    } else if (!funnel_Sitz.value) {
      setShow(true);
      funnel_Sitz.style.borderBlockColor = "Red";
    } else {
      setShow(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677">
          Kapital der Gesellschaft</span>
        <span className="e2215_678">
        Bitte geben Sie den Betrag ein, über welche die Gesellschaft verfügen soll.
        </span>
        <div className="e2215_687"></div>
        <span className="e2215_686">Zurück</span>
        <div className="container-fluid">
          <input
            className="form-control"
            placeholder=""
            label="Email"
            type="text"
            id="funnel_name"
          />
          <span class="e2215_715">Gesellschaftskapital</span>
        </div>
      
        <button class="e2215_711" type="submit"></button>

        <button class="e2215_711" type="submit"></button>

        <button class="e2215_712">WEITER</button>
        <span class="e2215_713">Überspringen</span>
      </form>
    </div>
  );
};

export default Funnel001;
