import React, { useEffect, useState, useContext } from "react";
import * as CompanyServer from "../components/appserver";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./funnel.css";

import { StageContext } from "../context/TaskContext";

const Funnel001 = (props) => {
  const { globalState, setGlobalState } = useContext(StageContext);

  const params = useParams();
  const initialState = { id: 0, name: "", foundation: 1950, website: "" };
  const document_init = { funnel_name: "", funnel_Sitz: "sitz*" };
  const [doc, setDocument] = useState(document_init);

  const [company, setCompany] = useState(initialState);
  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      //const { company_name } = data.document.company_name;
      console.log(data.document);
    
      setDocument({        ...data.document      });
      console.log(doc.id)
    } catch (error) {
      console.log(error);
    }
  };
  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
  };

  useEffect(() => {
    setGlobalState(1);
    if (params.id) {
      getCompany(params.id);
    }
    alert(doc)
    // eslint-disable-next-line
  }, []);
  const [show, setShow] = useState(false);
  const alert_funnel_001 = show ? "show" : "hide";
  const { cambiarMensaje, Onsubmit } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const funnel_name = document.getElementById("funnel_name");
    const funnel_Sitz = document.getElementById("funnel_Sitz");
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
    //document.name = e.target.value;
    console.log(e.target.value);

    setDocument({ ...doc, [e.target.id]: e.target.value });

    //console.log({ ...document, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="e2215_677"> Name und Sitz der Gesellschaft </span>
        <span className="e2215_678">
          Füllen Sie den Name der Gesellschaft und den Sitz in den
          untenstehenden Feldern ein.
        </span>
        <div className="e2215_687"></div>
        <Link
          onClick={() => setGlobalState(0)}
          className="e2215_686 link-primary"
          to="/"
        >
          Zurück
        </Link>
        <div className="container-fluid">
          <input
            className="form-control"
            value={doc.company_name}
            label="Email"
            type="text"
            id="funnel_name"
            onChange={handleInputChange}
          ></input>

          <span class="e2215_715">Name * </span>
        </div>
        <input
          className="form-control"
          value={doc.funnel_Sitz}
          label="Email"
          type="text"
          id="funnel_Sitz"
          onChange={handleInputChange}
        />

        <span class="e2215_717">Sitz *</span>
        <button class="e2215_711" type="submit">
          WEITER
        </button>

        <a class="e2215_713 " onClick={(e) => go_to_form(e, 2)} href="">
          Überspringen
        </a>
        <div id="alert_funnel_001" style={{ display: show ? "block" : "none" }}>
          <span className="alert_001"></span>
          <span className="alert_message_001">
            Das Feld darf nicht leer sein zum Fortfahren.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Funnel001;
