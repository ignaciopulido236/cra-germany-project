import React, { useContext, useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import * as CompanyServer from "../components/appserver";
import { useNavigate, useParams } from "react-router-dom";

export const StageContext = React.createContext();

export function StageContextProvider(props) {
  const [token_param, setTokenParam] = useState('');


  let [globalState, setGlobalState] = useState(0);
  let [linkid, setLinkId] = useState('107q9HvlKIQMbUocbwSI0of_Tld3Vm3zPh8LZhdiBL0A')
  const document_init = { funnel_name: "", funnel_Sitz: "sitz*" };
  const [doc, setDocument] = useState(document_init);

  const getCompany = async (token_param) => {
    try {
      const res = await CompanyServer.getCompany(token_param);
      const data = await res.json();
      //const { company_name } = data.document.company_name;
      // console.log(data.document);
      // console.log(data)
      // console.log('ESTO')
      // console.log(data.documents[0])
      // console.log('esto')

      setDocument({ ...data.documents[0] });
    
    } catch (error) {
      console.log(error);
    }
  };
  const [Stage, setStage] = useState(1);

  const go_to_form = async (e, stage_number) => {
    e.preventDefault();
    cambiarMensaje(stage_number);
    if (stage_number == 4) {
      setGlobalState(2)
    } else if (stage_number == 2) {
      setGlobalState(1)
    }
  };
  function cambiarMensaje(stage_000) {
    setStage(stage_000);
  }

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setDocument({ ...doc, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e,step) => {
   e.preventDefault();
  
   await CompanyServer.updateCompany(token_param, doc);
    //   //
    // };
    // const handleInputChange = (e) => {
    //   //console.log(e.target.value);
    //   setDocument({ ...doc, [e.target.id]: e.target.value });
    };


  const get_link = async (token_param) => {
    try {
      const res = await CompanyServer.generate_document(token_param);
      //const data = await res.json();
      return res
      //const { company_name } = data.document.company_name;
    } catch (error) {
      console.log(error);
      console.log("error")
    }

  };





  useEffect(() => {
    
  
   }, []);

  return (
    <StageContext.Provider value={{handleSubmit, Stage, setStage, globalState, setGlobalState, getCompany, doc, setTokenParam, token_param, setDocument, handleInputChange, CompanyServer, get_link, linkid, setLinkId, go_to_form }}>
      {props.children}
    </StageContext.Provider>
  );
}
