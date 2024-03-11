import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./styles.css"
//import HelloWorldApp from "./HelloWorldApp";


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
        <FirstApp title="Holis" subtitle={ 123 } />
    </React.StrictMode>
);