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
import { Alert } from "bootstrap";

const Funnel00081 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, setDocument, go_to_form } = useContext(StageContext);

  const params = useParams();

  // const go_to_form = async (e, stage_number) => {
  //   e.preventDefault();
  //   cambiarMensaje(stage_number);
  // };
  const [selectedValue, setSelectedValue] = useState("False");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();    
    if (selectedValue=="True"){
      const step_yes = e.currentTarget.getAttribute('step_yes');
      go_to_form(e, step_yes)
    }else if(selectedValue=="False"){
      const step = e.currentTarget.getAttribute('step');
      go_to_form(e, step)
    }  
  };




  return (
    <div className="container-fluid" >
      <form id="form-v1" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" step={props.next} step_yes={props.next_yes}>
        <GoBackButton step={props.previous} />
        <Title_001 size={props.size} headline={props.headline} question={props.question} />
        <div className="container-fluid p-4">
          <div>
            <div className="form-check p-2">
              <input value="True" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check p-2">
              <input value="False" className="form-check-input" type="radio" name="flexRadioDefault" defaultChecked id="flexRadioDefault2" onChange={handleChange} />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
        </div>
        <GoNext step={props.next} />



      </form>
    </div>
  );
};

export default Funnel00081;
