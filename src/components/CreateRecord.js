import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "./appserver";

const CreateRecord = () => {
  const navigate = useNavigate();
  async function NewRecord() {
    let company = { id: 0, name: "", foundation: 1950, website: "" };

    try {
      let res;
      res = await CompanyServer.registerCompany(company);
      console.log(res.message)
      const data = await res;
      console.log(data.message)
      if (data.message === "Post Success") {
        navigate("/gesellschaftsvertrag-ug/" + data.id);
      } 
    } catch (error) {
      navigate("/")
      console.log(error);
    }

  }

  useEffect(() => {
    NewRecord();
  }, []);
  return (
    <div>  
    </div>
  );
}


export default CreateRecord;

