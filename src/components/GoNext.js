import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";

const GoNext = (props) => {
    const step=props.step
    const { setStage, globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange } = useContext(StageContext);

    const go_to_form = (e, step) => {
        e.preventDefault();
        setStage(step);
        // Add your form navigation logic here
    }

    return (
        <div className="container-fluid">
            <button className="e2215_711 offset-0 col-4" type="submit">WEITER</button>
            <a className="e2215_713 col-6 offset-1 " onClick={(e) => go_to_form(e, step)} href=''>Überspringen</a>
        </div>
    )
}

export default GoNext;
