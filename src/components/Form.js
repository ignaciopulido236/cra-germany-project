import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./appserver";
import Funnel001 from "../funnel/Funnel001";
import Funnel002 from "../funnel/Funnel002";

import Lateral001 from "../funnel/Lateral001";
import Lateral002 from "../funnel/Lateral002";

const CompanyForm = () => {

    const navigate = useNavigate();
    const params = useParams();

    // console.log(params);

    const initialState = { id: 0, name: "", foundation: 1950, website: "" };

    const [company, setCompany] = useState(initialState);

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setCompany({ ...company, [e.target.name]: e.target.value });
    };
    async function NewRecord() {
        try {
            let res;
            if (!params.id) {
                res = await CompanyServer.registerCompany(company);
                console.log(res.message)
                const data = await res;
                console.log(data.id);
                params.id = data.id;
                if (data.message === "Success") {
                    setCompany(initialState);
                }
                getCompany(data.id)
                /*navigate("/updateCompany/" + data.id);*/
            }

        } catch (error) {
            navigate("/")
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await CompanyServer.registerCompany(company);
                const data = await res.json();
                if (data.message === "Post Success") {
                    setCompany(initialState);
                }
            } else {
                await CompanyServer.updateCompany(params.id, company);
            }
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getCompany = async (companyId) => {
        try {
            const res = await CompanyServer.getCompany(companyId);
            const data = await res.json();
            const { name, foundation, website } = data.company;
            setCompany({ name, foundation, website });
        } catch (error) {
            console.log(error);
        }
    };
    const [Stage, setStage] = useState(2);



    useEffect(() => {
        if (params.id) {
            getCompany(params.id);
        } else {
            console.log(params.id)
            /*NewRecord()*/
        }
        if (Stage == 2) {
            const stage_1 = document.getElementById("stage_1");
            const stage_2 = document.getElementById("stage_2");

            const stage_one = document.getElementById("lateral_stage_1");
            const stage_two = document.getElementById("lateral_stage_2");



            stage_1.style.visibility = "hidden"
            stage_one.style.visibility = "hidden"
            stage_2.style.visibility = "visible"
            stage_two.style.visibility = "visible"


        }
        // eslint-disable-next-line
    }, [Stage]);
    function padreAHijo() {
        setStage(2)

    };

    return (
        <div className="container-fluid"   >
            <div className="row">
                <div className="col-3">

                </div>
                <div className="FormContent col-5 text-center">
                    <div id="stage_1" >
                        <Funnel001 cambiarMensaje={() => padreAHijo()} />
                    </div>
                    <div id="stage_2" style={{ visibility: "hidden" }}>
                        <Funnel002 cambiarMensaje={() => padreAHijo()} />
                    </div>

                </div>
                <div className="col-4">
                    <div id="lateral_stage_1">
                        <Lateral001 />
                    </div>
                    <div id="lateral_stage_2">
                        <Lateral002 />
                    </div>



                </div>
            </div>

        </div>


    );
};

export default CompanyForm;