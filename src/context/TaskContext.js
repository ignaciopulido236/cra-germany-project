import React, { useContext, useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export const StageContext = React.createContext();

export function StageContextProvider(props) {
  let [globalState, setGlobalState] = useState(0);
 
  useEffect(() => {}, [globalState]);

  return (
    <StageContext.Provider value={{ globalState, setGlobalState }}>
      {props.children}
    </StageContext.Provider>
  );
}
