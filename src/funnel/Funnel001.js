import React, { useEffect, useState } from "react";

import "./funnel.css";
const Funnel001 = (props) => {
    const [show, setShow] = useState(false);
    const alert_funnel_001 = show ? "show" : "hide";
    const { cambiarMensaje } = props;
    console.log(props)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const funnel_name = document.getElementById("funnel_name");
        const funnel_Sitz = document.getElementById("funnel_Sitz");
        cambiarMensaje()

        if (!funnel_name.value) {
            setShow(true);

        } else if (!funnel_Sitz.value) {
            setShow(true);


            funnel_Sitz.style.borderBlockColor = "Red";
        } else {
            setShow(false);
        }

        console.log("OK");

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span className="e2215_677"> Name und Sitz der Gesellschaft </span>
                <span className="e2215_678">
                    Füllen Sie den Name der Gesellschaft und den Sitz in den
                    untenstehenden Feldern ein.
                </span>
                <div className="e2215_687"></div>
                <span className="e2215_686">Zurück</span>
                <div className="container-fluid">
                    <input
                        className="form-control"
                        placeholder="Name"
                        label="Email"
                        type="text"
                        id="funnel_name"
                    />
                    <span class="e2215_715">Name *</span>
                </div>
                <input
                    className="form-control"
                    placeholder="Sitz"
                    label="Email"
                    type="text"
                    id="funnel_Sitz"
                />
                <span class="e2215_717">Sitz *</span>
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
