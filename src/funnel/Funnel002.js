import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "../components/appserver";
import { BsArrowLeft } from "react-icons/bs"
import GoNext from "../components/GoNext";
import GoBackButton from "../components/GoBackButton";
import Title_001 from "./Title_001";

import "./funnel.css";
const Funnel002 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, token_param, handleInputChange } = useContext(StageContext);
  //const params = useParams()
  const [show, setShow] = useState(false);
  //const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;


  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CompanyServer.updateCompany(token_param, doc);
    cambiarMensaje(3);
  };
  useEffect(() => {
    setGlobalState(1);
  }, []);
  return (
    <div className="container-fluid" >
      <form id="form-v1" className="row offset-md-1 col-md-10" onSubmit={handleSubmit} style={{ backgroundColor: "red" }}>
       <GoBackButton step="1"/>
       <Title_001 content="Gegenstand der Gesellschaft" description="       Beschreiben Sie den Gegenstand der Gesellschaft, um das Ziel der
          Tätigkeit zu erläutern."/>   
   


        <div className="col-10">
          <textarea
            className="form-control"
            label="Email"
            type="text"
            /*id="funnel_Gegenstand"*/
            id='created'
            value={doc.created}
            onChange={handleInputChange}

          />
          {/* <span class="e2215_715">Gegenstand</span> */}
        </div>
        <div className="container-fluid">
          <button class="e2215_711 col-3" type="submit">WEITER</button>

          <a class="e2215_713 offset-1" onClick={(e) => go_to_form(e, 3)} href=''>Überspringen</a>

        </div>

      </form>
    </div>
  );
};

export default Funnel002;
