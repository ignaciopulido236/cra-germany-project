import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "../components/appserver";
import { BsArrowLeft } from "react-icons/bs"




import "./funnel.css";
const Funnel002 = (props) => {
  const { globalState, setGlobalState, getCompany, doc, token_param, handleInputChange } = useContext(StageContext);
  //const params = useParams()
  const [show, setShow] = useState(false);
  //const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje } = props;


  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CompanyServer.updateCompany(token_param, doc);
    cambiarMensaje(3);
  };
  useEffect(() => {
    setGlobalState(1);
  }, []);
  return (
    <div className="container-fluid" >
      <form id="form-002" className="row offset-md-1 col-md-10" onSubmit={handleSubmit} style={{ backgroundColor: "red" }}>
        <a
          style={{ marginTop: "40px" }}
          className="e2215_686 col-12 link-primary"
          onClick={(e) => go_to_form(e, 1)}
          href=""
        >
          <BsArrowLeft />
          Zurück
        </a>
        <span className="e2215_677"> Gegenstand der Gesellschaft </span>
        <span className="e2215_678 col-md-7">
          Beschreiben Sie den Gegenstand der Gesellschaft, um das Ziel der
          Tätigkeit zu erläutern.
        </span>


        <div className="col-10">
          <textarea
            className="form-control"
            label="Email"
            type="text"
            /*id="funnel_Gegenstand"*/
            id='created'
            value={doc.created}
            onChange={handleInputChange}

          />
          {/* <span class="e2215_715">Gegenstand</span> */}
        </div>
        <div className="container-fluid">
          <button class="e2215_711 col-3" type="submit">WEITER</button>

          <a class="e2215_713 offset-1" onClick={(e) => go_to_form(e, 3)} href=''>Überspringen</a>

        </div>

      </form>
    </div>
  );
};

export default Funnel002;
