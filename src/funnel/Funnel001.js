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

const Funnel001 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, setDocument } = useContext(StageContext);

  const params = useParams();

  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  // useEffect(() => {
  //   setGlobalState(1);
  //   if (params.id) {
  //     getCompany(params.id);
  //   }
  //   // eslint-disable-next-line
  // }, []);
  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje, Onsubmit } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const funnel_name = document.getElementById("company_name");
    const funnel_Sitz = document.getElementById("company_sitz");
    await CompanyServer.updateCompany(params.id, doc);
    //
    if (!funnel_name.value || !funnel_Sitz.value) {
      setShow(true);
    } else {
      setShow(false);
      cambiarMensaje(2);
    }
    //
    if (!funnel_name.value) {
      funnel_name.classList.add("input-need-validation");
    } else {
      funnel_name.classList.remove("input-need-validation");
    }
    //
    if (!funnel_Sitz.value) {
      funnel_Sitz.classList.add("input-need-validation");
    } else {
      funnel_Sitz.classList.remove("input-need-validation");
    }
  };
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setDocument({ ...doc, [e.target.id]: e.target.value });
  };

  return (
    <div className="container-fluid" >
      <form id="form-v1" onSubmit={handleSubmit} className="row offset-md-1 col-md-10" >
        <Link
          style={{ marginTop: "40px" }}
          onClick={() => setGlobalState(0)}
          className="c"
          to="/"
        >
          <BsArrowLeft />
          Zurück
        </Link>
        <Title_001 content=" Name und Sitz der Gesellschaft" description="Füllen Sie den Name der Gesellschaft und den Sitz in den
          untenstehenden Feldern ein."/>
        <div className="container-fluid">

          <div className="col-10 pb-4">
            {/* <span class="e2215_715">Name * </span> */}
            <input
              className="form-control "
              value={doc.company_name}
              label="Email"
              type="text"
              id="company_name"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="col-10">
            {/* <span className="e2215_717">Sitz *</span> */}
            <input
              className="form-control col-8"
              value={doc.company_sitz}
              label="Email"
              type="text"
              id="company_sitz"
              onChange={handleInputChange}
            />
            <div id="alert_funnel_001" style={{ display: show ? "block" : "none" }}>

              <span className="alert_message_001">
                <CiCircleAlert /> Das Feld darf nicht leer sein zum Fortfahren.
              </span>
            </div>
          </div>

        </div>
        <GoNext step="2" />



      </form>
    </div>
  );
};

export default Funnel001;
