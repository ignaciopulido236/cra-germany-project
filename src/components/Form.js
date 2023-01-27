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

import Funnel000Template from "../funnel/Funnel000Template";
import Funnel0008 from "../funnel/Funnel0008";

import Funnel0009 from "../funnel/Funnel0009";
import Funnel0010 from "../funnel/Funnel0010";

import Funnel0011 from "../funnel/Funnel0011";


import { help, questions } from "../funnel/help_content";
import Funnel0012 from "../funnel/Funnel0012";
import Funnel00081 from "../funnel/Funnel0008_Select";


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
    if (Stage<3 ){
      setGlobalState(1)  
    }
    if (Stage>2 & Stage<11){
      setGlobalState(2)  
    }
    if (Stage>10){
      setGlobalState(3)  
    }
    if (stages>10) {
      setGlobalState(4)
    }
    if (params.id) {
      getCompany(params.id);
      setTokenParam(params.id);
    } else {
      console.log(params.id);
      /*NewRecord()*/
    }
    if (Stage == 999) {
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
    lateral_stage_el.style.display = "block";

    // eslint-disable-next-line
  }, [Stage, globalState]);
  function padreAHijo(stage_000) {
    console.log(stage_000);
    setStage(stage_000);
  }

  return (
    <div id="main-grid">
      <div className="hide_under_992px"></div>
      <div id="navbar-container">
        <PhoneInfo />
      </div>
      <div id="sidebar-container">
        <SideBar stage={{ stage: '3' }} />
      </div>
      <div className="secondary-grid">
        <label className="hide_under_992px"> </label>
        <div id="body-container" >
          <div id="form-container" className="row" >

            <div id="stage_1" className="stages">
              <Funnel0009
                next="2" previous="1" question={questions.q1}
              />

            </div>
            <div id="stage_2" className="stages">
              <Funnel0010 buddy="WorkHours" fontsize="30px" next="3" previous="1" question={questions.q2} />
            </div>
            <div id="stage_3" className="stages">
              <Funnel0009
                next="4"  previous="2" question={questions.q3}
              />
            </div>

            <div id="stage_4" className="stages">
              <Funnel0011 next="5" previous="3" question={questions.q4} />
            </div>

            <div id="stage_5" className="stages">
              <Funnel0011 next="6" previous="4" question={questions.q5} />
            </div>

            <div id="stage_6" className="stages">
              <Funnel0008 fontsize="30px" next="7" previous="5" question={questions.q6} />
            </div>
            <div id="stage_7" className="stages">
              <Funnel0011 next="8" previous="6" question={questions.q7} />
            </div>
            <div id="stage_8" className="stages">
              <Funnel0008 fontsize="30px" next="10" previous="7" question={questions.q8} />
            </div>
            {/* <div id="stage_9" className="stages">
              <Funnel000Template next="10" previous="8" question={questions.q9} />
            </div> */}
            <div id="stage_10" className="stages">
              <Funnel0008 next="11" previous="8" question={questions.q10} />
            </div>
            <div id="stage_11" className="stages">
              <Funnel0009 fontsize="25px" next="12" previous="10" question={questions.q11} />
            </div>
            <div id="stage_12" className="stages">
              <Funnel0012 fontsize="23px" next="13" previous="11" question={questions.q12} />
            </div>
            <div id="stage_13" className="stages">
              <Funnel0008 fontsize="23px" next="14" previous="12" question={questions.q13} />
            </div>
            <div id="stage_14" className="stages">
              <Funnel00081 fontsize="25px" next="15" previous="13" question={questions.q14} />
            </div>
            <div id="stage_1401" className="stages">
              <Funnel0010 buddy="Hours" fontsize="25px" next="15" previous="14" question={questions.q1401} />
            </div>
            <div id="stage_15" className="stages">
              <Funnel0008  fontsize="20px" next="16" previous="14" question={questions.q15} />
            </div>
            <div id="stage_16" className="stages">
              <Funnel0008 fontsize="22px" next="17" previous="15" question={questions.q16} />
            </div>
            <div id="stage_17" className="stages">
              <Funnel0008 fontsize="25px"  next="18" previous="16" question={questions.q17} />
            </div>
            <div id="stage_18" className="stages">
              <Funnel0008 fontsize="25px" next="19" previous="17" question={questions.q18} />
            </div>
            <div id="stage_19" className="stages">
              <Funnel0011 next="20" previous="18" question={questions.q19} />
            </div>
            <div id="stage_20" className="stages">
              <Funnel0008 fontsize="25px" next="21" previous="19" question={questions.q20} />
            </div>
            <div id="stage_21" className="stages">
              <Funnel003 next="22" previous="20" question={questions.q21} />
            </div>
            <div id="stage_22" className="stages">
              <Funnel0010 next="23" previous="21" question={questions.q22} />
            </div>
            <div id="stage_23" className="stages">
              <Funnel003 next="24" previous="22" question={questions.q23} />
            </div>









          </div>
          <div className="help-container">
            <div id="lateral_stage_1" className="stages">

              <Lateral001 content={help.help_01} />
            </div>

            <div id="lateral_stage_2" className="stages">
              <Lateral001 content={help.help_02} />
            </div>

            <div id="lateral_stage_3" className="stages">
              <Lateral001 content={help.help_03} />
            </div>

            <div id="lateral_stage_4" className="stages">
              <Lateral001 content={help.help_04} />
            </div>

            <div id="lateral_stage_401" className="stages">
              <Lateral001 content={help.help_04} />
            </div>
            <div id="lateral_stage_5" className="stages">
              <Lateral001 content={help.help_05} />
            </div>
            <div id="lateral_stage_6" className="stages">
              <Lateral001 content={help.help_06} />
            </div>
            <div id="lateral_stage_7" className="stages">
              <Lateral001 content={help.help_07} />
            </div>

            <div id="lateral_stage_8" className="stages">
              <Lateral001 content={help.help_08} />
            </div>
            <div id="lateral_stage_9" className="stages">
              <Lateral001 content={help.help_09} />
            </div>
            <div id="lateral_stage_10" className="stages">
              <Lateral001 content={help.help_10} />
            </div>
            <div id="lateral_stage_11" className="stages">
              <Lateral001 content={help.help_11} />
            </div>
            <div id="lateral_stage_12" className="stages">
              <Lateral001 content={help.help_12} />
            </div>
            <div id="lateral_stage_13" className="stages">
              <Lateral001 content={help.help_13} />
            </div>
            <div id="lateral_stage_14" className="stages">
              <Lateral001 content={help.help_14} />
            </div>
            <div id="lateral_stage_1401" className="stages">
              <Lateral001 content={help.help_1401} />
            </div>
            <div id="lateral_stage_15" className="stages">
              <Lateral001 content={help.help_15} />
            </div>
            <div id="lateral_stage_16" className="stages">
              <Lateral001 content={help.help_16} />
            </div>
            <div id="lateral_stage_17" className="stages">
              <Lateral001 content={help.help_17} />
            </div>
            <div id="lateral_stage_18" className="stages">
              <Lateral001 content={help.help_18} />
            </div>
            <div id="lateral_stage_19" className="stages">
              <Lateral001 content={help.help_19} />
            </div>
            <div id="lateral_stage_20" className="stages">
              <Lateral001 content={help.help_20} />
            </div>
            <div id="lateral_stage_21" className="stages">
              <Lateral001 content={help.help_21} />
            </div>
            <div id="lateral_stage_22" className="stages">
              <Lateral001 content={help.help_22} />
            </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
