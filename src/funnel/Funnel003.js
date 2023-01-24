import React, { useEffect, useState,useContext } from "react";
import { StageContext } from "../context/TaskContext";


import "./funnel.css";
const Funnel001 = (props) => {
    const { globalState, setGlobalState } = useContext(StageContext);

    const [show, setShow] = useState(false);
    const alert_funnel_001 = show ? "show" : "hide";
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
        cambiarMensaje(4);
        setGlobalState(2)

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span className="e2215_677">Anzahl der Gesellschafter</span>
                <span className="e2215_678">
                    Wählen Sie aus, wie viele Gesellschafter die Gesellschaft haben wird.
                </span>
                <div className="e2215_687"></div>
                <a className="e2215_686  link-primary" onClick={(e) => go_to_form(e, 2)} href="">Zurück</a>

                <select className="form-select" id="form_select_stage_3">
                    <option value="grapefruit" selected>2 Gesellschafter</option>
                    <option value="lime">3 Gesellschafter</option>
                    <option  value="coconut">4 Gesellschafter</option>
                    <option value="mango">5 Gesellschafter</option>
                </select>
                <button class="e2215_711" type="submit">WEITER</button>
                <a class="e2215_713 "  onClick={(e) => go_to_form(e,4)} href=''>Überspringen</a>
                <div id="alert_funnel_001" style={{ display: show ? "block" : "none" }}>
                    <span className="alert_001"></span>
                    <span className="alert_message_001">
                        Das Feld darf nicht leer sein zum Fortfahren.
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Funnel001;
