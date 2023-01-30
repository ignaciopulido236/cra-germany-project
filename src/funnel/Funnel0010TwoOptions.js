import React, { useEffect, useState, useContext } from "react";
import * as CompanyServer from "../components/appserver";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./funnel.css";
import "../components/Home.css";

import { StageContext } from "../context/TaskContext";
import { BsArrowLeft } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import Title_001 from "./Title_001";
import Title_002 from "./Title_002";
import GoNext from "../components/GoNext";
import GoBackButton from "../components/GoBackButton";

const Funnel0010TwoOptions = (props) => {
  const {
    globalState,
    setGlobalState,
    getCompany,
    doc,
    setDocument,
    go_to_form,
    handleInputChange,
  } = useContext(StageContext);

  // const [select, setSelect] = React.useState(props.question_value_1);
  // const [selectedValue, setSelectedValue] = useState("Keine Regelung");
  const [radioButton, setRadioButton] = React.useState(props.question_value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const step = e.currentTarget.getAttribute("step");
    if(radioButton==props.options[0]){
      go_to_form(e, props.option_1_next);
    }else{
      go_to_form(e, props.option_2_next);
    }
    // go_to_form(e, step);
  };
  const handleChange = (event) => {
    setDocument({ ...doc, [event.target.id]: event.target.value });
    setRadioButton(event.target.value);
  };

  useEffect(() => {
    setRadioButton(props.question_value);
  }, [props.question_value]);

  return (
    <div className="container-fluid">
      <form
        id="form-v1"
        onSubmit={handleSubmit}
        className="row offset-md-1 col-md-10"
        step={props.next}
      >
        <GoBackButton step={props.previous} />
        <Title_001 size={props.size} headline={props.headline} question={props.question} />
        <div className="container-fluid">
          <div className="form-outline">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={props.options[0]}
                checked={radioButton === props.options[0]}
                onChange={handleChange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                {props.options[0]}
              </label>
            </div>
            <div className="form-check p-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleChange}
                checked={radioButton === props.options[1]}
                value={props.options[1]}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                {props.options[1]}
              </label>
            </div>
          </div>
        </div>
        <GoNext step={props.next} />
      </form>
    </div>
  );
};

export default Funnel0010TwoOptions;
