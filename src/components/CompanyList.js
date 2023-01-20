import { useEffect, useState } from "react";
import * as CompanyServer from "./appserver.js";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  const listCompanies = async () => {
    try {
      const res = await CompanyServer.listCompanies();
      const data = await res.json();
      setCompanies(data.companies);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  return (
    <div className="row">
      {companies.map((company) => (
        <h1 key={company.id}>{company.name}</h1>
      ))}
    </div>
  );
};

export default CompanyList;
