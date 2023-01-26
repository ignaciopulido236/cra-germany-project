import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "./appserver";
import "./Home.css";
import stars from "./images/stars.png";
import phone from "./images/phone.png";
import group_48 from "./images/Group_48.png";
import { Link } from "react-router-dom";
import PhoneInfo, { Phone } from "./navbar/PhoneInfo"
import SideBar from "./sidebar/SideBar";

const Home = () => {
  //const navigate = useNavigate();

  return (
    <div id="main-grid">

      <div className="hide_under_992px"></div>
      <div id="navbar-container">
        <PhoneInfo />
      </div>
      <div id="sidebar-container">
        <SideBar stage={{ stage: '3' }} />
      </div>
      <div id="secondary-grid">
        <label className="hide_under_992px"></label>
        <div id="body-container">
          <div id="form-container">
            <div className="d-flex container-fluid col-8 e2215_815" style={{ marginTop: "1px", padding: "20px" }}>
              <div className="offset-3 col-6 row container d-flex align-items-center" style={{ minHeight: "300px", alignContent: "center" }}>
                <img className="align-middle mx-auto my-auto" src={group_48} alt="group_48 Logo" style={{ maxheight: "380px", margin: "20px" }} />
              </div>
            </div>
            <div className=" offset-2 col-10 e2215_779 row" style={{ marginTop: "minmax(auto,40px)" }}> UG Gesellschaftervertrag erstellen. </div>

            <div className="offset-2 col-10 e2215_780">
              In wenigen Schritten helfen wir Ihnen einen Gesellschaftervertrag zu
              erstellen.
            </div>
            <Link className="mt-5 mb-3 offset-2 btn btn-primary e2215_814" to="/new">
              STARTEN
            </Link>
          </div>
          <div id="help-container">


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
