import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import accounting from 'accounting';
import GoBackButton from "../components/GoBackButton";
import Title_001 from "./Title_001";
import currency from 'currency.js';
import GoNext from "../components/GoNext";

import "./funnel.css";
const Funnel001 = (props) => {


  const { globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange, setDocument } = useContext(StageContext);
  let initial_value = doc.Gesellschaftskapital;

  const [money, setMoney] = useState(initial_value);


  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };
  const handleInputChange_for_money = (e) => {
    const Gesellschaftskapital = document.getElementById("Gesellschaftskapital");

    Gesellschaftskapital.value = accounting.formatMoney(e.target.value)

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Gesellschaftskapital = document.getElementById("Gesellschaftskapital");
    doc.Gesellschaftskapital = (parseFloat(accounting.formatNumber(Gesellschaftskapital.value))
    )
    await CompanyServer.updateCompany(token_param, doc);
    cambiarMensaje(6);

  }

  useEffect((


  ) => {
    const Gesellschaftskapital = document.getElementById("Gesellschaftskapital");
    Gesellschaftskapital.value = accounting.formatMoney(doc.Gesellschaftskapital)
  }, [globalState]);


  ;
  return (
    <div className="container-fluid">
      <form id="form-003" className="row offset-md-1 col-md-10" onSubmit={handleSubmit} style={{ backgroundColor: "yellow" }}>
        <GoBackButton step="401" />
        <Title_001 content={props.title} description={props.description}></Title_001>
        <div className="container-fluid">
          <input
            className="form-control"
            placeholder=""
            step="any"
            id="Gesellschaftskapital"
            /*type="number"*/
            onBlur={handleInputChange_for_money}
          />
          {/* <span class="e2215_715">Gesellschaftskapital</span> */}
        </div>
        <GoNext step="6" />



      </form>
    </div>
  );
};

export default Funnel001;
