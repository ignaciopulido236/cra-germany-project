import React, { useEffect, useState, useContext } from "react";
import * as CompanyServer from "../components/appserver";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./funnel.css";
import "../components/Home.css"

import { StageContext } from "../context/TaskContext";
import { BsArrowLeft } from "react-icons/bs"
import { CiCircleAlert } from "react-icons/ci"
import Title_001 from "./Title_001";
import GoNext from "../components/GoNext";
import GoBackButton from "../components/GoBackButton";
import Title_002 from "./Title_002";

const Funnel0012 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, setDocument, go_to_form } = useContext(StageContext);

  const params = useParams();

  // const go_to_form = async (e, stage_number) => {
  //   e.preventDefault();
  //   cambiarMensaje(stage_number);
  // };


  const [show, setShow] = useState(false);
  // const alert_funnel_001 = show ? "show" : "hide";
  // const { cambiarMensaje, Onsubmit } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const step = e.currentTarget.getAttribute('step')
    go_to_form(e, step)

    //   // await CompanyServer.updateCompany(params.id, doc);
    //   //
    // };
    // const handleInputChange = (e) => {
    //   //console.log(e.target.value);
    //   setDocument({ ...doc, [e.target.id]: e.target.value });
  };




  return (
    <div className="container-fluid" >
      <form id="form-v0010" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" step={props.next}>
        <GoBackButton step={props.previous} />
        <Title_002 size={props.fontsize} content={props.question} description={props.description} />
        <div className="container-fluid">


        <div className="form-check ">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
          Freizeitausgleich
          </label>
        </div>
        <div className="form-check p-4">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
          Zusätzliche Vergütung
          </label>
        </div>
        <div className="form-check ">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
          Keine Regelung
          </label>
        </div>


        </div>

       
        <GoNext step={props.next} />


      </form>
    </div>
  );
};

export default Funnel0012;
