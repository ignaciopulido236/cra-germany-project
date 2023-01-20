import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

// Components:
import CompanyList from "./components/CompanyList";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";

import CreateRecord from "./components/CreateRecord";
import "bootstrap/dist/css//bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar />      
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/updateCompany/:id" element={<Form />}></Route>
        <Route path="/new" element={<CreateRecord />}></Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
