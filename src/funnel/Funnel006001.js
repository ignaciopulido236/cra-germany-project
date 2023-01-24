import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";


import "./funnel.css";
const Funnel001 = (props) => {
  const { globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange } = useContext(StageContext);


  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
    if (stage_number == 7) {
      setGlobalState(4)
    } else if (stage_number < 7) {
      setGlobalState(2)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    doc.second_anteil = parseFloat(doc.second_anteil)
    await CompanyServer.updateCompany(token_param, doc)
    cambiarMensaje(6002);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677">
          Anteil zweiter Gesellschafter</span>
        <span className="e2215_678">
          Bitte geben Sie den Anteil des ersten Gesellschafters am
          Gesellschaftskapital an.
        </span>
        <div className="e2215_687"></div>
        <a
          className="e2215_686  link-primary"
          onClick={(e) => go_to_form(e, 5)}
          href=""
        >
          Zurück
        </a>

        <div className="container-fluid">
          <input
            className="form-control"
            min="0"
            max="100"
            id="second_anteil"
            type="number"
            onChange={handleInputChange}
            value={doc.second_anteil}
          />
          <span class="e2215_715">Anteil *</span>
        </div>

        <button class="e2215_711" type="submit"></button>

        <button class="e2215_711" type="submit">WEITER</button>

        <a class="e2215_713 " onClick={(e) => go_to_form(e, 6002)} href=''>Überspringen</a>

      </form>
    </div>
  );
};

export default Funnel001;
