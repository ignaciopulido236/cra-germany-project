import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import { BsArrowLeft } from "react-icons/bs";

const GoBackButton = () => {
    const { setStage, globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange } = useContext(StageContext);

    const go_to_form = (e, step) => {
        e.preventDefault();
        setStage(step);
    }


    return (
        <a style={{ marginTop: "40px" }} className="e2215_686 col-12 link-primary" onClick={(e) => go_to_form(e, 2)} href="">
            <BsArrowLeft /> Zurück
        </a>
    )
}

export default GoBackButton
