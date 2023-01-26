import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StageContext } from "../context/TaskContext";

import * as CompanyServer from "./appserver";
import Funnel001 from "../funnel/Funnel001";
import Funnel002 from "../funnel/Funnel002";

import Lateral001 from "../funnel/Lateral001";
import Lateral002 from "../funnel/Lateral002";

import Funnel003 from "../funnel/Funnel003";
import Lateral003 from "../funnel/Lateral003";

import Funnel004 from "../funnel/Funnel004";
import Lateral004 from "../funnel/Lateral004";

import Funnel00401 from "../funnel/Funnel00401";
import Lateral00401 from "../funnel/Lateral00401";

import Funnel005 from "../funnel/Funnel005";
import Lateral005 from "../funnel/Lateral005";

import Funnel006 from "../funnel/Funnel006";
import Lateral006 from "../funnel/Lateral006";

import Funnel006001 from "../funnel/Funnel006001";
import Lateral006001 from "../funnel/Lateral006001";

import Funnel006002 from "../funnel/Funnel006002";
import Lateral006002 from "../funnel/Lateral006002";

import Funnel006003 from "../funnel/Funnel006003";
import Lateral006003 from "../funnel/Lateral006003";

import Funnel006004 from "../funnel/Funnel006004";
import Lateral006004 from "../funnel/Lateral006004";

import Funnel007 from "../funnel/Funnel007";
import Lateral007 from "../funnel/Lateral007";

import SideBar from "./sidebar/SideBar";
import PhoneInfo from "./navbar/PhoneInfo";


let document_token = ""; //Global Variable

const CompanyForm = () => {
  const {
    Stage, setStage,
    globalState,
    setGlobalState,
    setTokenParam,
    getCompany,
    get_link,
    token_param,
    setLinkId,
  } = useContext(StageContext);

  const navigate = useNavigate();
  const params = useParams();

  // console.log(params);

  const initialState = { id: 0, name: "", foundation: 1950, website: "" };

  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
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
    alert(e);
    company.name = e;
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

  // const getCompany = async (companyId) => {
  //   try {
  //     const res = await CompanyServer.getCompany(companyId);
  //     const data = await res.json();
  //     const { name, foundation, website } = data.company;
  //     setCompany({ name, foundation, website });
  //     document_token = data.company.description;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const [Stage, setStage] = useState(1);

  useEffect(() => {
    const stages = document.getElementsByClassName("stages");
    for (let i = 0; i < stages.length; i++) {
      stages[i].style.visibility = "hidden";
      stages[i].style.display = "none";
    }
    if (params.id) {
      getCompany(params.id);
      setTokenParam(params.id);
    } else {
      console.log(params.id);
      /*NewRecord()*/
    }
    if (Stage == 7) {
      //setLinkId(get_link(token_param))
      //setLinkId(get_link(token_param).message)
      async function example() {
        let message;
        try {
          message = await get_link(token_param);
        } catch (error) {
          console.log(error);
        }
        console.log(message.message);
        setLinkId(message.message)
      }
      example();


      //setLinkId(('1DopqbC_SvczOoERGlLw1Jq0RlwPeoGO_OR4wj-eHtNI'))
    }
    //show selected stage
    const stage_el = document.getElementById("stage_" + Stage);
    const lateral_stage_el = document.getElementById("lateral_stage_" + Stage);
    stage_el.style.visibility = "visible";
    lateral_stage_el.style.visibility = "visible";
    stage_el.style.display = "block";
    lateral_stage_el.style.visibility = "block";

    // eslint-disable-next-line
  }, [Stage, globalState]);
  function padreAHijo(stage_000) {
    console.log(stage_000);
    setStage(stage_000);
  }

  return (
    <div id="main-grid">
      <div className="hide_under_992px"></div>
      {/* <div id="navbar-container">
        <PhoneInfo />
      </div> */}
      {/* <div id="sidebar-container">
        <SideBar stage={{ stage: '3' }} />
      </div> */}
      <div className="secondary-grid">
        <label className="hide_under_992px"> </label>
        <div id="body-container" >
          <div id="form-container" >

            <div id="stage_1" className="stages">
              <Funnel001
                cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
                Onsubmit={company}
              />
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
       
          <div id="stage_401" className="stages">
            <Funnel00401
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
            />
          </div>
          <div id="stage_5" className="stages">
            <Funnel005 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
           
          <div id="stage_6" className="stages">
            <Funnel006 cambiarMensaje={(stage_000) => padreAHijo(stage_000)} />
          </div>
          <div id="stage_6001" className="stages">
            <Funnel006001
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
            />
          </div>
          <div id="stage_6002" className="stages">
            <Funnel006002
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
            />
          </div>
          <div id="stage_6003" className="stages">
            <Funnel006003
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
            />
          </div>
          <div id="stage_6004" className="stages">
            <Funnel006004
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
            />
          </div>
          <div id="stage_7" className="stages">
            <Funnel007
              cambiarMensaje={(stage_000) => padreAHijo(stage_000)}
              name={document_token}
            />
          </div> 
          </div>
          <div className="help-container">

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
             
            <div id="lateral_stage_401" className="stages">
              <Lateral00401 />
            </div>
            <div id="lateral_stage_5" className="stages">
              <Lateral005 />
            </div>
            <div id="lateral_stage_6" className="stages">
              <Lateral006 />
            </div>
            <div id="lateral_stage_6001" className="stages">
              <Lateral006001 />
            </div>
            <div id="lateral_stage_6002" className="stages">
              <Lateral006002 />
            </div>
            <div id="lateral_stage_6003" className="stages">
              <Lateral006003 />
            </div>
            <div id="lateral_stage_6004" className="stages">
              <Lateral006004 />
            </div>
            <div id="lateral_stage_7" className="stages">
              <Lateral007 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
