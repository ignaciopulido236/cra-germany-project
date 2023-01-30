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
import GoNext from "../components/GoNext";
import GoBackButton from "../components/GoBackButton";
import Title_002 from "./Title_002";

const Q22Empleador = (props) => {
  const {
    globalState,
    setGlobalState,
    getCompany,
    doc,
    setDocument,
    go_to_form,
  } = useContext(StageContext);

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
    const step = e.currentTarget.getAttribute("step");
    go_to_form(e, step);
    await CompanyServer.updateCompany(params.id, doc);

    //   //
    //   //
    // };
    // const handleInputChange = (e) => {
    //   //console.log(e.target.value);
    //   setDocument({ ...doc, [e.target.id]: e.target.value });
  };

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setDocument({ ...doc, [e.target.id]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <form
        id="form-v1_student"
        onSubmit={handleSubmit}
        className="row offset-md-1 col-md-10"
        step={props.next}
      >
        <GoBackButton step={props.previous} />
        <Title_001
          size={props.size}
          headline={props.headline}
          question={props.question}
        />
        <div className="container-fluid">
          <div className="container-fluid p-1">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Anrede"
              type="text"
              id="CompanyName"
              value={doc.CompanyName}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
          <div className="container-fluid p-1">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Titel"
              type="text"
              id="CompanyStreet"
              value={doc.CompanyStreet}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
          <div className="container-fluid p-1">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Name des Werkstudenten"
              type="text"
              id="CompanyZip"
              value={doc.CompanyZip}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
          <div className="container-fluid p-1">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Anschrift des Werkstudentne"
              label="Email"
              type="text"
              id="CompanyCity"
              value={doc.CompanyCity}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
          <div className="container-fluid p-1">
            <input
              className="form-control col-8 row mb-2"
              placeholder="Anschrift des Werkstudentne"
              label="Email"
              type="text"
              id="CompanyLand"
              value={doc.CompanyLand}
              onChange={handleInputChange}
            />
            {/* <span class="e2215_715">Name *</span> */}
          </div>
        </div>
        <GoNext step={props.next} />
      </form>
    </div>
  );
};

export default Q22Empleador;
