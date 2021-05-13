import React from "react";
import {render} from "react-dom";
//import AlertTemplate from 'react-alert-template-basic';
import "./index.css";
//import Header from './components/header/Header.component';
import Router from './Router';


//import * as serviceWorker from "./serviceWorker";

const Root = () => {
    return (
        <div>
            <div className="contenedor">
                <Router />
            </div>
        </div>
        )
}

render(<Root/>, document.querySelector('#root'));


