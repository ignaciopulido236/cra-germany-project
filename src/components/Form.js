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
import Funnel0008 from "../funnel/Funnel0008_Single_Boolean";

import Funnel0009 from "../funnel/Funnel0009_Single_Date";
import Funnel0010 from "../funnel/Funnel0010_Single_Number";

import Funnel0011 from "../funnel/Funnel0011_Single_String";

import { help, questions, headlines,final_view_text } from "../funnel/help_content";
import Funnel0012 from "../funnel/Funnel0012";
import Funnel00081 from "../funnel/Funnel0008_Select";
import Funnel0010TwoOptions from "../funnel/Funnel0010TwoOptions";

import Funnel0010MultipleSelect from "../funnel/Funnel0010MultripleSelect";

import Funnel0010SelectAndNumber from "../funnel/Funnel0010_Select_and_Number";

import Q22Empleador from "../funnel/Question22Empleador";
import Q23Student from "../funnel/Question23Student";

  

let document_token = ""; //Global Variable

const CompanyForm = () => {
  const {
    Stage,
    setStage,
    globalState,
    setGlobalState,
    setTokenParam,
    getCompany,
    get_link,
    token_param,
    setLinkId,
    doc,
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
        // getCompany(data.id);
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
    if (!token_param) {
    } else {
      getCompany(token_param);
      console.log(doc);
    }

    // doc=getCompany(token_param)

    const stages = document.getElementsByClassName("stages");
    for (let i = 0; i < stages.length; i++) {
      stages[i].style.visibility = "hidden";
      stages[i].style.display = "none";
    }
    if (Stage < 3) {
      setGlobalState(1);
    }
    if ((Stage > 2) & (Stage < 11)) {
      setGlobalState(2);
    }
    if (Stage > 10) {
      setGlobalState(3);
    }
    if (stages > 10) {
      setGlobalState(4);
    }
    if (params.id) {
      setTokenParam(params.id);
    } else {
      console.log(params.id);
      /*NewRecord()*/
    }
    if (Stage == 99) {
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
        setLinkId(message.message);
      }
      example();

      //setLinkId(('1DopqbC_SvczOoERGlLw1Jq0RlwPeoGO_OR4wj-eHtNI'))
    }
    //show selected stage
    const stage_el = document.getElementById("stage_" + Stage);
    if (document.getElementById("lateral_stage_" + Stage)) {
      const lateral_stage_el = document.getElementById(
        "lateral_stage_" + Stage
      );
      lateral_stage_el.style.visibility = "visible";
      lateral_stage_el.style.display = "block";
    }
    stage_el.style.visibility = "visible";
    stage_el.style.display = "block";

    // eslint-disable-next-line
  }, [Stage, globalState]);
  // function padreAHijo(stage_000) {
  //   console.log(stage_000);
  //   setStage(stage_000);
  // }

  return (
    <div id="main-grid">
      <div className="hide_under_992px"></div>
      <div id="navbar-container">
        <PhoneInfo />
      </div>
      <div id="sidebar-container">
        <SideBar stage={{ stage: "3" }} />
      </div>
      <div className="secondary-grid">
        <label className="hide_under_992px"> </label>
        <div id="body-container">
          <div id="form-container" className="row">
            <div id="stage_1" className="stages">
              <Funnel0009
                next="2"
                previous="1"
                headline={headlines.q1}
                question={questions.q1}
                question_id="Startdate"
                question_value={doc.Startdate}
              />
            </div>
            <div id="stage_2" className="stages">
              <Funnel0010
                buddy="WorkHours"
                fontsize="30px"
                next="3"
                previous="1"
                headline={headlines.q2}
                question={questions.q2}
                question_id="Workinghours"
                question_value={doc.Workinghours}
              />
            </div>
            <div id="stage_3" className="stages">
              <Funnel0009
                question_id="Enddate"
                question_value={doc.Enddate}
                next="4"
                previous="2"
                headline={headlines.q3}
                question={questions.q3}
              />
            </div>

            <div id="stage_4" className="stages">
              <Funnel0011
                next="5"
                previous="3"
                headline={headlines.q4}
                question={questions.q4}
                question_id="WorkingstudentPosition"
                question_value={doc.WorkingstudentPosition}
              />
            </div>

            <div id="stage_5" className="stages">
              <Funnel0011
                next="6"
                previous="4"
                headline={headlines.q5}
                question={questions.q5}
                question_id="OrtArbeitgeber"
                question_value={doc.OrtArbeitgeber}
              />
            </div>

            <div id="stage_6" className="stages">
              <Funnel0008
                fontsize="30px"
                next="7"
                previous="5"
                headline={headlines.q6}
                question={questions.q6}
                question_id="boolean_q6"
                question_value={doc.boolean_q6}
              />
            </div>
            <div id="stage_7" className="stages">
              <Funnel0010
                next="8"
                previous="6"
                headline={headlines.q7}
                question={questions.q7}
                question_id="ArbeitszeitTage"
                question_value_1={doc.ArbeitszeitTage}
              />
            </div>
            <div id="stage_8" className="stages">
              <Funnel0008
                fontsize="30px"
                next="10"
                previous="7"
                headline={headlines.q8}
                question={questions.q8}
                question_id="boolean_q8"
                question_value={doc.boolean_q8}
              />
            </div>
            {/* <div id="stage_9" className="stages">
              <Funnel000Template next="10" previous="8" question={questions.q9} />
            </div> */}
            <div id="stage_10" className="stages">
              <Funnel0008
                next="11"
                previous="8"
                headline={headlines.q10}
                question={questions.q10}
                question_id="boolean_q10"
                question_value={doc.boolean_q10}
              />
            </div>
            <div id="stage_11" className="stages">
              <Funnel0010SelectAndNumber
                fontsize="25px"
                next="12"
                previous="10"
                headline={headlines.q11}
                question={questions.q11}
                question_id_1="BezahlungMonat"
                question_value_1={doc.BezahlungMonat}
                question_id_2="BrottoGehalt_String"
                question_value_2={doc.BrottoGehalt_String}
              />
            </div>
            <div id="stage_12" className="stages">
              <Funnel0010MultipleSelect
                fontsize="23px"
                next="14"
                previous="11"
                headline={headlines.q12}
                question={questions.q12}
                question_id="bonus_q12"
                question_value={doc.bonus_q12} //add to database
              />
            </div>
            <div id="stage_1201" className="stages">
              <Funnel0008
                fontsize="23px"
                next="14"
                previous="12"
                headline={headlines.q1201}
                question={questions.q1201}
                question_id="boolean_q1201"
                question_value={doc.boolean_q1201} //add to database
              />
            </div>
            <div id="stage_1202" className="stages">
              <Funnel0008
                fontsize="23px"
                next="14"
                previous="12"
                headline={headlines.q1202}
                question={questions.q1202}
                question_id="boolean_q1202"
                question_value={doc.boolean_q1202} //add to database
              />
            </div>

            {/* <div id="stage_13" className="stages">
              <Funnel0008
                fontsize="23px"
                next="14"
                previous="12"
                question={questions.q13}
              />
            </div> */}
            <div id="stage_14" className="stages">
              <Funnel00081
                fontsize="25px"
                next="15"
                previous="12"
                headline={headlines.q14}
                question={questions.q14}
                question_id="boolean_q14"
                question_value={doc.boolean_q14}
                next_yes="1401"
              />
            </div>
            <div id="stage_1401" className="stages">
              <Funnel0010
                buddy="Hours"
                fontsize="25px"
                next="15"
                previous="14"
                headline={headlines.q1401}
                question={questions.q1401}
                question_id="Urlaubstage"
                question_value={doc.Urlaubstage}
              />
            </div>
            <div id="stage_15" className="stages">
              <Funnel00081
                fontsize="20px"
                next="17"
                previous="14"
                headline={headlines.q15}
                question={questions.q15}
                question_id="boolean_q15"
                question_value={doc.boolean_q15}
                next_yes="16"
              />
            </div>
            <div id="stage_16" className="stages">
              <Funnel0008
                fontsize="22px"
                next="17"
                previous="15"
                headline={headlines.q16}
                question={questions.q16}
                question_id="boolean_q16"
                question_value={doc.boolean_q16}
              />
            </div>
            <div id="stage_17" className="stages">
              <Funnel0008
                fontsize="25px"
                next="18"
                previous="16"
                headline={headlines.q17}
                question={questions.q17}
                question_id="boolean_q17"
                question_value={doc.boolean_q17}
              />
            </div>

            <div id="stage_18" className="stages">
              <Funnel00081
                fontsize="25px"
                next="19"
                previous="17"
                headline={headlines.q18}
                question={questions.q18}
                next_yes="1801"
              />
            </div>
            <div id="stage_1801" className="stages">
              <Funnel0011
                fontsize="25px"
                next="19"
                previous="17"
                headline={headlines.q18}
                question={questions.q18}
                question_id="AnzahlProbezeitWochen"
                question_value={doc.AnzahlProbezeitWochen}
              />
            </div>
            <div id="stage_19" className="stages">
              <Funnel0010TwoOptions
                fontsize="25px"
                next="20"
                previous="18"
                options={["Gesetzliche Pflicht", "Längere Frist"]}
                headline={headlines.q19}
                question={questions.q19}
                question_value={doc.q19_options}
                option_1_next="20"
                option_2_next="1901"
              />
            </div>

            <div id="stage_1901" className="stages">
              <Funnel0011
                fontsize="25px"
                next="20"
                previous="19"
                headline={headlines.q1901}
                question={questions.q1901}
              />
            </div>

            <div id="stage_20" className="stages">
              <Funnel0008
                fontsize="25px"
                next="21"
                previous="19"
                headline={headlines.q20}
                question={questions.q20}
              />
            </div>
            <div id="stage_21" className="stages">
              <Funnel0010TwoOptions
                next="22"
                previous="18"
                options={["Organisation", "Person"]}
                headline={headlines.q21}
                question={questions.q21}
                question_value={doc.Organization_or_Person}
                option_1_next="20"
                option_2_next="1901"
              />
            </div>
            <div id="stage_22" className="stages">
              <Q22Empleador
                next="23"
                previous="21"
                headline={headlines.q22}
                question={questions.q22}
              />
            </div>
            <div id="stage_23" className="stages">
              <Q23Student
                next="23"
                previous="22"
                headline={headlines.q23}
                question={questions.q23}
              />
            </div>
            <div id="stage_99" className="stages">
              <Funnel007
                // next="23"
                previous="23"
                headline={final_view_text.headline}
                question={final_view_text.subtitle}
              />
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
            <div id="lateral_stage_1201" className="stages">
              <Lateral001 content={help.help_1201} />
            </div>
            <div id="lateral_stage_1202" className="stages">
              <Lateral001 content={help.help_1202} />
            </div>
            <div id="lateral_stage_99" className="stages">
              <Lateral007 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
