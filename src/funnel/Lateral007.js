import React, { useEffect, useState, useContext } from "react";
import "./funnel.css";
import Group50 from "./images/Group50.png";
import { StageContext } from "../context/TaskContext";

const Lateral007 = (props) => {
  const {
    globalState,
    setGlobalState,
    doc,
    token_param,
    CompanyServer,
    handleInputChange,
    linkid,
  } = useContext(StageContext);

  useEffect(() => {}, [globalState,linkid]);
  function handleDownload() {
    const url =
      "https://docs.google.com/feeds/download/documents/export/Export?id=1i_eYynjRMg9KrAl-5j63q5An3dM70iucmLs6Ftf6NKo&exportFormat=pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div>
      <div className="e2215_718"></div>
      <span className="e2215_721"></span>
      <span className="e2215_720_funnel_7 ">Online Beglaubigen</span>
      <span className="e2215_721">
        Sie können im Anschluss ganz einfach den Vertrag online beglaubigen.
        
      </span>
      <div className="e2215_722"></div>
      <div className="e2215_1518"></div>
      <a
        href={`https://docs.google.com/feeds/download/documents/export/Export?id=${linkid}&exportFormat=pdf`}
        className="btn e2215_1519"
      >
        PDF DOWNLOADEN
      </a>
      <div className="e2215_816_group50">
        <img src={Group50} alt="group_48 Logo" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Lateral007;
