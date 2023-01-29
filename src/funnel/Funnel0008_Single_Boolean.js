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

const Funnel0008 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, setDocument, go_to_form } = useContext(StageContext);


  const [radioButton, setRadioButton] = React.useState(props.question_value ? "true" : "false");

 

  const handleRadioButtonChange = (event) => {
    setDocument({ ...doc, [event.target.id]: event.target.value });
    setRadioButton(event.target.value)

  }
  // const [show, setShow] = useState(false);
  // const alert_funnel_001 = show ? "show" : "hide";
  // const { cambiarMensaje, Onsubmit } = props;

  useEffect(() => {
    setRadioButton(props.question_value ? "true" : "false")
  }, [props.question_value]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const step = e.currentTarget.getAttribute('step')
    go_to_form(e, step)


  };





  return (
    <div className="container-fluid" >
      <form id="form-v0010" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" step={props.next}>
        <GoBackButton step={props.previous} />
        <Title_002 size={props.fontsize} content={props.question} description={props.description} />
        <div className="container-fluid p-4">

          <div>
            <div className="form-check p-2">
              <input value='true' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={radioButton === 'true'} onChange={handleRadioButtonChange} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check p-2">
              <input value='false' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={radioButton === 'false'} onChange={handleRadioButtonChange} />
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

export default Funnel0008;
