import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "./appserver";
import "./Home.css";
import "./SideBar.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import stars from "./images/stars.png";
import phone from "./images/phone.png";
import group_48 from "./images/Group_48.png";
import { Link } from "react-router-dom";
//
import { StageContext } from "../context/TaskContext";

const SideBar = (props) => {
  const { globalState, setGlobalState } = useContext(StageContext);

  const navigate = useNavigate();
  const { init_stage } = props.stage;
  //const [stage, setStage] = useState(init_stage);
  //const [stage, setstage] = useState(5);
  useEffect(() => {
    
  }, [globalState]);
  const change_state = (value) => {
    setGlobalState(value);
  };
  return (
    <div className="container-fluid d-none d-md-block d-lg-block left-bar">
      <div className="vl"></div>
      <div className="e2215_782 " aria-disabled="true">
        beglaubigt.de
      </div>
      <label
        className={globalState == 1 ? "e2215_783 make_bold" : "e2215_783 "}
        onClick={() => change_state(1)}
      >
        <span
          className={globalState >= 1 ? "e2215_783  just_blue" : " e2215_783"}
        >
          <BsArrowRight
            className={globalState == 1 ? "" : "make_transparent"}
          />
          <AiOutlineCheck
            className={globalState > 1 ? "" : "make_transparent"}
          />
          Allgemeines
        </span>
      </label>   
      <label
        onClick={() => change_state(2)}
        className={globalState == 2 ? "e2215_784  make_bold" : " e2215_784  "}
      >
        <span
          className={globalState >= 2 ? "e2215_784  just_blue" : " e2215_784  "}
          aria-disabled="true"
        >
          <BsArrowRight
            className={globalState == 2 ? "" : "make_transparent"}
          />
          <AiOutlineCheck
            className={globalState > 2 ? "" : "make_transparent"}
          />
          Beginn
        </span>
      </label>

      <label
        onClick={() => change_state(3)}
        className={globalState == 3 ? "e2215_783  make_bold" : " e2215_785  "}
      >
        <span
          className={globalState >= 3 ? "e2215_785  just_blue" : " e2215_785  "}
          aria-disabled="true"
        >
          <BsArrowRight
            className={globalState == 3 ? "" : "make_transparent"}
          />
          <AiOutlineCheck
            className={globalState > 3 ? "" : "make_transparent"}
          />
          Daten zum Kaufvertrag
        </span>
      </label>
      <label
        onClick={() => change_state(4)}
        className={globalState == 4 ? " make_bold" : "  "}
      >
        <span
          className={globalState >= 4 ? "e2215_786  just_blue" : " e2215_786  "}
          aria-disabled="true"
        >
          <BsArrowRight
            className={globalState == 4 ? "" : "make_transparent"}
          />
          <AiOutlineCheck
            className={globalState > 4 ? "" : "make_transparent"}
          />
          Persönliche Daten
        </span>
      </label>

      <div>
        <a
          className="e2215_810 text-decoration-none"
          href="https://beglaubigt.de/datenschutz"
        >
          Datenschutzbedingungen
        </a>

        <a
          className="e2215_811 text-decoration-none"
          href="https://beglaubigt.de/impressum"
        >
          Impressum
        </a>
        <span className="e2215_812" aria-disabled="true">
          beglaubigt.com Group © 2022
        </span>
      </div>
    </div>
  );
};

export default SideBar;
