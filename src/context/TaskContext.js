import React, { useContext, useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import * as CompanyServer from "../components/appserver";
import { useNavigate, useParams } from "react-router-dom";

export const StageContext = React.createContext();

export function StageContextProvider(props) {
  const [token_param, setTokenParam] = useState('');


  let [globalState, setGlobalState] = useState(0);
  const document_init = { funnel_name: "", funnel_Sitz: "sitz*" };
  const [doc, setDocument] = useState(document_init);
  
  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      //const { company_name } = data.document.company_name;
      console.log(data.document);
    
      setDocument({        ...data.document      });
      console.log(doc.id)
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setDocument({ ...doc, [e.target.id]: e.target.value });
  };
 
  useEffect(() => {}, [globalState]);

  return (
    <StageContext.Provider value={{ globalState, setGlobalState,getCompany,doc, setTokenParam,token_param,setDocument,handleInputChange, CompanyServer }}>
      {props.children}
    </StageContext.Provider>
  );
}
