import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "../appserver";
import "./navbar.css";
import stars from "./images/stars.png";
import phone from "./images/phone.png";
import group_48 from "./images/Group_48.png";
import { Link } from "react-router-dom";

const PhoneInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-body">
      <div id="navbar-content">
        <img src={stars} alt="Stars Logo" style={{ width: "100%" }} />
        <div className="phone_logo ">
          <img src={phone} alt="Phone Logo" style={{ width: "100%" }} />
        </div>
        <div>(+43) 030 3292 2323</div>
      </div>
    </div>
  );
};

export default PhoneInfo;
