import React, { useEffect, useState,useContext } from "react";

import "./funnel.css";
import "./funnel_007.css";
import Group50 from "./images/Group50.png"
import { StageContext } from "../context/TaskContext";


const Funnel001 = (props) => {

  const { globalState, setGlobalState,doc,token_param,CompanyServer,handleInputChange,linkid } = useContext(StageContext);

  const link = 'http://localhost:3000/gesellschaftsvertrag-ug/' + token_param;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      console.log('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const funnel_name = document.getElementById("funnel_name");
    const funnel_Sitz = document.getElementById("funnel_Sitz");
    cambiarMensaje(8);
    if (!funnel_name.value) {
      setShow(true);
    } else if (!funnel_Sitz.value) {
      setShow(true);
      funnel_Sitz.style.borderBlockColor = "Red";
    } else {
      setShow(false);
    }
  };

  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;

  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
    setGlobalState(2)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677">Glückwunsch, Dokument bereit.</span>
        <span className="e2215_678">
          Sie können nun direkt das Dokument Online beglaubigen oder das Dokument herunterladen.
        </span>
        <div className="e2215_687"></div>

        <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 6004)} href="">Zurück</a>


        <div class="btn e2215_1522 btn-outline-primary" onClick={handleClick}></div>
        <div class="e2215_1573"></div>
        <div class="e2215_1574" ></div>
       
        <span class="e2215_1575">{link}</span>
        <a class="e2215_1576"></a>
        <span class="e2215_1577">Teile den Vertrag </span>

        <iframe className="Frame_007" src={`https://docs.google.com/document/d/${linkid}/preview`}></iframe>



      </form>
    </div>
  );
};

export default Funnel001;
