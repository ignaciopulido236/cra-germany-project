import React, { useEffect, useState, useContext } from "react";

import "./funnel.css";
import "./funnel_007.css";
import Group50 from "./images/Group50.png"
import { StageContext } from "../context/TaskContext";
import GoBackButton from "../components/GoBackButton";
import Title_001 from "./Title_001";

const Funnel001 = (props) => {

  const { globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange, linkid } = useContext(StageContext);

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
    <div className="container-fluid" id="funnel-end">
      <GoBackButton step="6" />
      <Title_001 content="Glückwunsch, Dokument bereit." description="Sie können nun direkt das Dokument Online beglaubigen oder das Dokument herunterladen." />
      <div id="link-box-v1" onClick={handleClick}>
        <span class="e2215_1577 col-12">Teile den Vertrag </span>
        <span class=" col-8" >   <label class="e2215_1575 ">{link}</label></span>

      </div>

<iframe className="Frame_007 container-fluid mt-3" src={`https://docs.google.com/document/d/${linkid}/preview`}></iframe>


    </div>
  );
};

export default Funnel001;
