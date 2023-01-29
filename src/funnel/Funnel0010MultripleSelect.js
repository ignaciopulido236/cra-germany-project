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

const Funnel0010MultipleSelect = (props) => {
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
    go_to_form(e, step);
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
        id="form-v0010"
        onSubmit={handleSubmit}
        className="row offset-md-1 col-md-10"
        step={props.next}
      >
        <GoBackButton step={props.previous} />
        <Title_002 size={props.fontsize} content={props.question} />
        <div className="container-fluid">
          <div className="form-outline">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="Freizeitausgleich"
                checked={radioButton === "Freizeitausgleich"}
                onChange={handleChange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Freizeitausgleich
              </label>
            </div>
            <div className="form-check p-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleChange}
                checked={radioButton === "Zusätzliche Vergütung"}
                value="Zusätzliche Vergütung"
              />
              <label
                
                className="form-check-label"
                for="flexRadioDefault2"
              >
                Zusätzliche Vergütung
              </label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="Keine Regelung"
                onChange={handleChange}              
                checked={radioButton === "Keine Regelung"}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Keine Regelung
              </label>
            </div>
          </div>
        </div>
        <GoNext step={props.next} />
      </form>
    </div>
  );
};

export default Funnel0010MultipleSelect;
