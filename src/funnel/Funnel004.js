import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import GoBackButton from "../components/GoBackButton";
import Title_001 from "./Title_001";
import "./funnel.css";
import GoNext from "../components/GoNext";
const Funnel004 = (props) => {
  const { globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange } = useContext(StageContext);

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
    cambiarMensaje(401);
  };
  useEffect(() => {

  }, []);
  return (
    <div className="container-fluid">
      <form id="form-004" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" style={{ backgroundColor: "green" }} >
        <GoBackButton step="3"></GoBackButton>
        <Title_001 content={props.title} description="Füllen Sie die legitimen Daten des ersten Gesellschafters vollständig
          aus."></Title_001>
        <div className="container-fluid">
          <div className="container-fluid ">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Name"
              label="Email"
              type="text"
              id="first_shareholder_name"
              value={doc.first_shareholder_name}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
          <div className="container-fluid">
            <input
              className="form-control col-8 row mb-2"
              /*id="funnel_Geburtsdatum"*/
              placeholder="Geburtsdatum"
              first_shareholder_birthday
              label="Email"
              type="date"
              id="first_shareholder_birthday"
              value={doc.first_shareholder_birthday}
              onChange={handleInputChange}
            />
          </div>
          <div className="container-fluid">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Wohnort"
              label="Email"
              type="text"
              /*id="funnel_Wohnort"*/
              id="first_shareholder_residence"
              value={doc.first_shareholder_residence}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <GoNext step={props.next_stage} />
        {/* <span class="e2215_717_Geburtsdatum">Geburtsdatum *</span> */}
        {/* <a class="e2215_713 " onClick={(e) => go_to_form(e, 401)} href=''>Überspringen</a> */}

        {/* <button class="e2215_711" type="submit"></button> */}

        {/* <span class="e2215_717_Wohnort">Wohnort *</span> */}
        {/* <button class="e2215_711" type="submit"></button> */}

        {/* <button class="e2215_711" type="submit">WEITER</button> */}

      </form>
    </div>
  );
};

export default Funnel004;
