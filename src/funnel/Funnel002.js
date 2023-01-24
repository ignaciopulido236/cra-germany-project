import React, { useEffect, useState,useContext } from "react";
import { StageContext } from "../context/TaskContext";


import "./funnel.css";
const Funnel002 = (props) => {
  const { globalState, setGlobalState } = useContext(StageContext);
  
  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;
  console.log(props);
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarMensaje(3);    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677"> Gegenstand der Gesellschaft </span>
        <span className="e2215_678">
          Beschreiben Sie den Gegenstand der Gesellschaft, um das Ziel der
          Tätigkeit zu erläutern.
        </span>
        <div className="e2215_687"></div>
        <a
          className="e2215_686  link-primary"
          onClick={(e) => go_to_form(e, 1)}
          href=""
        >
          Zurück
        </a>

        <div className="container-fluid">
          <textarea
            className="form-control"
            label="Email"
            type="text"
            id="funnel_Gegenstand"
          />
          <span class="e2215_715">Gegenstand</span>
        </div>

        <button class="e2215_711" type="submit">WEITER</button>

        <a class="e2215_713 "  onClick={(e) => go_to_form(e, 3)} href=''>Überspringen</a>
        <div id="alert_funnel_001" style={{ display: show ? "block" : "none" }}>
          <span className="alert_001"></span>
          <span className="alert_message_001">
            Das Feld darf nicht leer sein zum Fortfahren.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Funnel002;
