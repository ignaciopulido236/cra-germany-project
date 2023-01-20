import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./appserver";
import Funnel001 from "../funnel/Funnel001";
import Lateral001 from "../funnel/Lateral001";
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

    useEffect(() => {
        if (params.id) {
            getCompany(params.id);
        } else {
            console.log("here")
            console.log(params.id)
            /*NewRecord()*/
        }
        // eslint-disable-next-line
    }, []);
    let a = 1;

    return (
        <div className="container-fluid"   >
            <div className="row">
                <div className="col-3">
                    
                </div>
                <div className="FormContent col-5 text-center">
                  
                    <Funnel001/>
                 
                </div>
                <div className="col-4">
                <Lateral001/>
                </div>
            </div>

        </div>


    );
};

export default CompanyForm;