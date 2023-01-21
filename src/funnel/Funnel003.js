import React, { useEffect, useState } from "react";

import "./funnel.css";
const Funnel001 = (props) => {
    const [show, setShow] = useState(false);
    const alert_funnel_001 = show ? "show" : "hide";
    const { cambiarMensaje } = props;
    console.log(props);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const funnel_name = document.getElementById("funnel_name");
        const funnel_Sitz = document.getElementById("funnel_Sitz");
        cambiarMensaje(4);

        if (!funnel_name.value) {
            setShow(true);
        } else if (!funnel_Sitz.value) {
            setShow(true);

            funnel_Sitz.style.borderBlockColor = "Red";
        } else {
            setShow(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span className="e2215_677">Anzahl der Gesellschafter</span>
                <span className="e2215_678">
                    Wählen Sie aus, wie viele Gesellschafter die Gesellschaft haben wird.
                </span>
                <div className="e2215_687"></div>
                <span className="e2215_686">Zurück</span>
                <select className="form-select" id="form_select_stage_3">
                    <option value="grapefruit">2 Gesellschafter</option>
                    <option value="lime">3 Gesellschafter</option>
                    <option selected value="coconut">4 Gesellschafter</option>
                    <option value="mango">5 Gesellschafter</option>
                </select>

                <button class="e2215_711" type="submit"></button>
                <button class="e2215_712">WEITER</button>
                <span class="e2215_713">Überspringen</span>
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
