import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import accounting from 'accounting';


import currency from 'currency.js';

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
    doc.Gesellschaftskapital = ( parseFloat(accounting.formatNumber(Gesellschaftskapital.value))
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
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677">
          Kapital der Gesellschaft</span>
        <span className="e2215_678">
          Bitte geben Sie den Betrag ein, über welche die Gesellschaft verfügen soll.
        </span>
        <div className="e2215_687"></div>
        <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 401)} href="">Zurück</a>


        <div className="container-fluid">
          <input
            className="form-control"
            placeholder=""
            step="any"
            id="Gesellschaftskapital"
            
            /*type="number"*/
        
            onBlur={handleInputChange_for_money}


          />
          <span class="e2215_715">Gesellschaftskapital</span>
        </div>

        <button className="e2215_711" type="submit"></button>
        <a className="e2215_713 " onClick={(e) => go_to_form(e, 6)} href=''>Überspringen</a>


        <button className="e2215_711" type="submit">WEITER</button>

      </form>
    </div>
  );
};

export default Funnel001;
