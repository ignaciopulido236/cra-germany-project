import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import GoBackButton from "../components/GoBackButton";
import Title_001 from "./Title_001";

import "./funnel.css";
import GoNext from "../components/GoNext";
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
    doc.first_anteil = parseFloat(doc.first_anteil)
    await CompanyServer.updateCompany(token_param, doc)
    cambiarMensaje(6001);
  };
  return (
    <div className="container-fluid">
      <form id="form-v1" className="row offset-md-1 col-md-10" onSubmit={handleSubmit} style={{ backgroundColor: "yellow" }}>
      <GoBackButton step="5"/>
      <Title_001 content="Anteil erster Gesellschafter" description="  Bitte geben Sie den Anteil des zweiten Gesellschafters am Gesellschaftskapital an."></Title_001>

  
        <div className="container-fluid">
          <input
            className="form-control"
            min="0"
            max="100"
            id="first_anteil"
            type="number"
            onChange={handleInputChange}
            value={doc.first_anteil}
          />
          {/* <span class="e2215_715">Anteil *</span> */}
        </div>
        <GoNext step="7"/>

      

      </form>
    </div>
  );
};

export default Funnel001;
