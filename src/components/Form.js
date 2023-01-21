import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./appserver";
import Funnel001 from "../funnel/Funnel001";
import Funnel002 from "../funnel/Funnel002";

import Lateral001 from "../funnel/Lateral001";
import Lateral002 from "../funnel/Lateral002";

import Funnel003 from "../funnel/Funnel003";
import Lateral003 from "../funnel/Lateral003";

import Funnel004 from "../funnel/Funnel004";
import Lateral004 from "../funnel/Lateral004";

import Funnel005 from "../funnel/Funnel005";
import Lateral005 from "../funnel/Lateral005";

import Funnel006 from "../funnel/Funnel006";
import Lateral006 from "../funnel/Lateral006";

import Funnel007 from "../funnel/Funnel007";
import Lateral007 from "../funnel/Lateral007";

const CompanyForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  // console.log(params);

  const initialState = { id: 0, name: "", foundation: 1950, website: "" };

  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
  async function NewRecord() {
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        console.log(res.message);
        const data = await res;
        console.log(data.id);
        params.id = data.id;
        if (data.message === "Success") {
          setCompany(initialState);
        }
        getCompany(data.id);
        /*navigate("/updateCompany/" + data.id);*/
      }
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();
        if (data.message === "Post Success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };
  const [Stage, setStage] = useState(5);

  useEffect(() => {
    const stages = document.getElementsByClassName("stages");
    for (let i = 0; i < stages.length; i++) {
      stages[i].style.visibility = "hidden";
    }
    if (params.id) {
      getCompany(params.id);
    } else {
      console.log(params.id);
      /*NewRecord()*/
    }
    //show selected stage
    const stage_el = document.getElementById("stage_" + Stage);
    const lateral_stage_el = document.getElementById("lateral_stage_" + Stage);
    stage_el.style.visibility = "visible";
    lateral_stage_el.style.visibility = "visible";

    // eslint-disable-next-line
  }, [Stage]);
  function padreAHijo(stage_000) {
    console.log(stage_000)
    setStage(stage_000);
  }

  return (
    <div className="container-fluid">
        <div>{Stage}</div>
      <div className="row">
        <div className="col-3"></div>
        <div className="FormContent col-5 text-center">
          <div id="stage_1" className="stages">
            <Funnel001 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_2" className="stages">
            <Funnel002 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_3" className="stages">
            <Funnel003 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_4" className="stages">
            <Funnel004 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_5" className="stages">
            <Funnel005 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_6" className="stages">
            <Funnel006 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_7" className="stages">
            <Funnel007 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>

        </div>
        <div className="col-4">
          <div id="lateral_stage_1" className="stages">
            <Lateral001 />
          </div>
          <div id="lateral_stage_2" className="stages">
            <Lateral002 />
          </div>
          <div id="lateral_stage_3" className="stages">
            <Lateral003 />
          </div>
          <div id="lateral_stage_4" className="stages">
            <Lateral004 />
          </div>
          <div id="lateral_stage_5" className="stages">
            <Lateral005 />
          </div>
          <div id="lateral_stage_6" className="stages">
            <Lateral006 />
          </div>
          <div id="lateral_stage_7" className="stages">
            <Lateral007 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
