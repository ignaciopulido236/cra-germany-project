import React, { useEffect, useState, useContext } from "react";
import "./funnel.css";
import Group50 from "./images/Group50.png";
import { StageContext } from "../context/TaskContext";
import { AiOutlineCheckCircle } from "react-icons/ai";


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

  useEffect(() => {}, [globalState, linkid]);
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
    <div className="container mt-5 pt-5" >
      <div  id="lateral_final" className="box_final_style col-10 offset-1 container-fluid">
      {/* <span className="e2215_721"></span> */}
      <span className="e2215_720_funnel_7  offset-1 col-10">          <AiOutlineCheckCircle size={25} />
Online Beglaubigen</span>
      <span className="e2215_721">
        Sie können im Anschluss ganz einfach den Vertrag online beglaubigen.
      </span>
      <div className="text-center row mb-4">
        <img src={Group50} alt="group_48 Logo" className=" offset-1 col-10" />
      </div>
      <a
        href={`https://docs.google.com/feeds/download/documents/export/Export?id=${linkid}&exportFormat=pdf`}
        className="btn btn-primary p-2 offset-1 col-10"
        style={{backgroundColor:"#1A5CBF"}}
      >
        PDF DOWNLOADEN
      </a>
      <a
        href={`https://docs.google.com/feeds/download/documents/export/Export?id=${linkid}&exportFormat=docx`}
        className="btn btn-link col-8 offset-1 col-10"
      >
        WORDX DOWNLOADEN
      </a>
      
      </div>
    </div>
  );
};

export default Lateral007;
