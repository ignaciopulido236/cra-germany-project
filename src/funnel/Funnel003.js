import React, { useEffect, useState,useContext } from "react";
import { StageContext } from "../context/TaskContext";

import "./funnel.css";
const Funnel001 = (props) => {
    const { globalState, setGlobalState,doc,token_param,CompanyServer,handleInputChange } = useContext(StageContext);

    const { cambiarMensaje } = props;
    const go_to_form = async (e, stage_number) => {
        e.preventDefault();
        cambiarMensaje(stage_number);
        if (stage_number==4){
            setGlobalState(2)
        } else if (stage_number==2) {
            setGlobalState(1)
        }        
      };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        await CompanyServer.updateCompany(token_param, doc);
        cambiarMensaje(4);
        setGlobalState(2)
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <span className="e2215_677">Anzahl der Gesellschafter</span>
                <span className="e2215_678">
                    Wählen Sie aus, wie viele Gesellschafter die Gesellschaft haben wird.
                </span>
                <div className="e2215_687"></div>
                <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 2)} href="">Zurück</a>

                <select onChange={handleInputChange} value={doc.number_of_shareholders} className="form-select" id="number_of_shareholders">
                    <option value="2" >2 Gesellschafter</option>
                    <option value="3" >3 Gesellschafter</option>
                    <option  value="4">4 Gesellschafter</option>
                    <option value="5">5 Gesellschafter</option>
                </select>
                <button class="e2215_711" type="submit">WEITER</button>
                <a class="e2215_713 "  onClick={(e) => go_to_form(e,4)} href=''>Überspringen</a>
             
            </form>
        </div>
    );
};

export default Funnel001;
