import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "./appserver";
import "./Home.css";
import stars from "./images/stars.png";
import phone from "./images/phone.png";
import group_48 from "./images/Group_48.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (<div className="container-fluid d-none d-md-block d-lg-block left-bar"  >
    <div class="vl"></div>
  <div className="e2215_782 pe-none" aria-disabled="true">
    {" "}
    beglaubigt.de
  </div>
  
  <span className="e2215_783 pe-none" aria-disabled="true">
    Allgemeines
  </span>
  <span className="e2215_784 pe-none" aria-disabled="true">
    Gesellschafter
  </span>
  <span className="e2215_785 pe-none" aria-disabled="true">
    Kapital & Einlagen
  </span>
  <span className="e2215_786 pe-none" aria-disabled="true">
    Sonstige Regelungen
  </span>

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
</div>);
};

export default SideBar;
