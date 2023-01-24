import React, { useEffect, useState } from "react";

import "./funnel.css";
const Funnel001 = (props) => {
  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarMensaje(6);
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
        <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 4)} href="">Zurück</a>


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
        <a class="e2215_713 " onClick={(e) => go_to_form(e, 6)} href=''>Überspringen</a>


        <button class="e2215_711" type="submit">WEITER</button>

      </form>
    </div>
  );
};

export default Funnel001;
