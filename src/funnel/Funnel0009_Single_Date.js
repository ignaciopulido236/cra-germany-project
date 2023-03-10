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

const Funnel0009 = (props) => {
  const {handleInputChange, globalState, setGlobalState, getCompany, doc, setDocument, go_to_form,token_param } = useContext(StageContext);

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
    const step=e.currentTarget.getAttribute('step')
    go_to_form(e,step)
    await CompanyServer.updateCompany(token_param, doc);


    //   // await CompanyServer.updateCompany(params.id, doc);
    //   //
    // };
    // const handleInputChange = (e) => {
    //   //console.log(e.target.value);
    //   setDocument({ ...doc, [e.target.id]: e.target.value });
  };


 

  return (
    <div className="container-fluid" >
      <form id="form-v1" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" step={props.next}>
        <GoBackButton step={props.previous} />
        <Title_001 size={props.size} headline={props.headline} question={props.question} />
        <div className="container-fluid p-4">
        <div className="container-fluid">
            <input
              className="form-control col-8 row mb-2"
              /*id="funnel_Geburtsdatum"*/
              // placeholder=""
              // first_shareholder_birthday
          
              type="date"
              id={props.question_id}
              value={props.question_value}
              // value={doc.first_shareholder_birthday}
              onChange={handleInputChange}
            />
          </div>

        </div>
        <GoNext step={props.next} />



      </form>
    </div>
  );
};

export default Funnel0009;
