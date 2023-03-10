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

const Funnel0010SelectAndNumber = (props) => {
  const {
    globalState,
    setGlobalState,
    getCompany,
    doc,
    setDocument,
    go_to_form,
    handleInputChange,
    token_param
  } = useContext(StageContext);

  const [select, setSelect] = React.useState(props.question_value_1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const step = e.currentTarget.getAttribute("step");
    go_to_form(e, step);
    await CompanyServer.updateCompany(token_param, doc);

    //   // 
    //   //
    // };
    // const handleInputChange = (e) => {
    //   //console.log(e.target.value);
    //   setDocument({ ...doc, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    setSelect(props.question_value_1);
  }, [props.question_value_1]);

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
            <select
              value={select}
              class="form-select"
              aria-label="Default select example"
              onChange={handleInputChange}
              id={props.question_id_1}
            >
              <option>Open this select menu</option>
              <option>Pro Stunde</option>
              <option>Pro Monat</option>
            </select>
            <label className="form-label" for="typeNumber">
              {" "}
              {props.buddy}
            </label>
            <input
              id={props.question_id_2}
              onChange={handleInputChange}
              type="number"
              value={props.question_value_2}
              className="form-control"
            />
          </div>
        </div>
        <GoNext step={props.next} />
      </form>
    </div>
  );
};

export default Funnel0010SelectAndNumber;
