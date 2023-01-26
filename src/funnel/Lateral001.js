import React from "react";
import "./funnel.css";
import { AiOutlineQuestionCircle } from 'react-icons/ai';


class Lateral001 extends React.Component {
    render() {
        return (<div className="row offset-md-1 col-md-10 ">
            <div id="help-content" class="container-fluid e2215_718 text-center p-4" style={{ marginTop: "20px" }}>
                <span class="e2215_720 container col-12 "> <AiOutlineQuestionCircle ></AiOutlineQuestionCircle>Erklärun </span>
                <div class="e2215_721 container">Bitte geben Sie den Namen der Gesellschaft ohne
                    Rechtsformzusatz, d. h.
                    ohne den Zusatz "UG (haftungsbeschränkt)" an. Dieser wird im Vertrag
                    automatisch dem Namen hinzugefügt. Möglich sind Sach- und Fantasienamen
                    wie z. B. "Maier Muffins". Für weitere Informationen klicken Sie bitte
                    auf "Das heißt genau".
                </div>
            </div>


        </div>

        );
    }
}

export default Lateral001;
