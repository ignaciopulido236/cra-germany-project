import React, { useEffect, useState, useContext } from "react";
import { StageContext } from "../context/TaskContext";
import { BsArrowLeft } from "react-icons/bs"
import GoBackButton from "../components/GoBackButton";
import GoNext from "../components/GoNext";
import "./funnel.css";
const Funnel001 = (props) => {
    const { go_to_form, globalState, setGlobalState, doc, token_param, CompanyServer, handleInputChange } = useContext(StageContext);

    const { cambiarMensaje } = props;


    const handleSubmit = async (e) => {
        e.preventDefault();
        await CompanyServer.updateCompany(token_param, doc);
        cambiarMensaje(4);
        setGlobalState(2)
    };
    return (
        <div className="container-fluid"  >
            <form id="form-003" className="row offset-md-1 col-md-10" onSubmit={handleSubmit} style={{ backgroundColor: "yellow" }}>
                <GoBackButton step="2"></GoBackButton>
                <span className="e2215_677">Anzahl der Gesellschafter</span>
                <span className="e2215_678">
                    Wählen Sie aus, wie viele Gesellschafter die Gesellschaft haben wird.
                </span>
                <div className="col-10">
                    <select onChange={handleInputChange} value={doc.number_of_shareholders} className="form-select" id="number_of_shareholders">
                        <option value="2" >2 Gesellschafter</option>
                        <option value="3" >3 Gesellschafter</option>
                        <option value="4">4 Gesellschafter</option>
                        <option value="5">5 Gesellschafter</option>
                    </select>
                </div>
                <GoNext step="4" />
                {/* <div className="container-fluid">
                    <button class="e2215_711" type="submit">WEITER</button>
                    <a class="e2215_713 " onClick={(e) => go_to_form(e, 4)} href=''>Überspringen</a>

                </div> */}


            </form>
        </div>
    );
};

export default Funnel001;
