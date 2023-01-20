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
      
    </div>
  );
};

export default Home;
