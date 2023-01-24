import React, { useEffect, useState,useContext } from "react";
import { StageContext } from "../context/TaskContext";


import "./funnel.css";
const Funnel001 = (props) => {
  const { globalState, setGlobalState,doc,token_param,CompanyServer,handleInputChange } = useContext(StageContext);

  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CompanyServer.updateCompany(token_param, doc);

    cambiarMensaje(5);   
  };
  useEffect(() => {
    //setGlobalState(2)
 
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677">Daten des zweiten Gesellschafters</span>
        <span className="e2215_678">
        Füllen Sie die legitimen Daten des zweiten Gesellschafters vollständig aus.
        </span>
        <div className="e2215_687"></div>
        <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 4)} href="">Zurück</a>


        <div className="container-fluid">
          <input
            className="form-control"
            placeholder="Name"
            label="Email"
            type="text"
            id="second_shareholder_name"
            value={doc.second_shareholder_name}
            onChange={handleInputChange}
          />
          <span class="e2215_715">Name *</span>
        </div>
        <input
          className="form-control"
          /*id="funnel_Geburtsdatum"*/
          placeholder="Geburtsdatum"
          first_shareholder_birthday
          label="Email"
          type="date"
          id="second_shareholder_birthday"
          value={doc.second_shareholder_birthday}
          onChange={handleInputChange}

        />
        <input
          className="form-control"
          placeholder="Wohnort"
          label="Email"
          type="text"
          /*id="funnel_Wohnort"*/
          id="second_shareholder_residence"
          value={doc.second_shareholder_residence}
          onChange={handleInputChange}

        />
        <span class="e2215_717_Geburtsdatum">Geburtsdatum *</span>
        <a class="e2215_713 "  onClick={(e) => go_to_form(e, 5)} href=''>Überspringen</a>

        <button class="e2215_711" type="submit"></button>

        <span class="e2215_717_Wohnort">Wohnort *</span>
        <button class="e2215_711" type="submit"></button>

        <button class="e2215_711" type="submit">WEITER</button>

      </form>
    </div>
  );
};

export default Funnel001;
