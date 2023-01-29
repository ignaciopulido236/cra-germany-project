import React from "react";
import "./funnel.css";
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Lateral001 = (props) => {
    return (
        <div className="container-fluid offset-lg-1 col-12 col-md-10 offset-0">
            <div id="help-content" className="container-fluid e2215_718 text-center p-3" style={{ marginTop: "5px" }}>
                <span className="e2215_720 container col-12 "> <AiOutlineQuestionCircle ></AiOutlineQuestionCircle>Erklärun </span>
                <div className="e2215_721 container mt-2">
                    {props.content}


                </div>
            </div>
        </div>
    );
};

export default Lateral001;
