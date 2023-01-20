import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "./appserver";
import "./Home.css";
import stars from "./images/stars.png";
import phone from "./images/phone.png";
import group_48 from "./images/Group_48.png";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-grid container-fluid" >
      <div className="container-fluid d-none d-md-block d-lg-block"  >
        <span className="e2215_782 pe-none" aria-disabled="true">
          {" "}
          beglaubigt.de
        </span>
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
      </div>
      <div>
        <div className="e2215_815"></div>
        <div className="e2215_816">
          <img src={group_48} alt="group_48 Logo" style={{ width: "100%" }} />
        </div>
        <span className="e2215_779"> UG Gesellschaftervertrag erstellen. </span>
        <span className="e2215_780">
          In wenigen Schritten helfen wir Ihnen einen Gesellschaftervertrag zu
          erstellen.
        </span>
        <div className="e2215_813"></div>
        <Link className="e2215_814 text-decoration-none" to="/new">
          STARTEN
        </Link>
      </div>
      <div className="phone-number">
        <img src={stars} alt="Stars Logo" style={{ width: "100%" }} />
        <div className="phone_logo ">
          <img src={phone} alt="Phone Logo" style={{ width: "100%" }} />
        </div>
        <div>(+43) 030 3292 2323</div>
      </div>
    </div>
  );
};

export default Home;
