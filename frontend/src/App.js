import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/Login.component";
import Register from "./components/Register.component";
import Profile from "./components/Profile.component";

function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Ingresar"}>Asistencia APP</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Ingresar"}>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Registrar"}>Registrar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Ingresar" component={Login} />
            <Route path="/Registrar" component={Register} />
            <Route exact path="/Perfil" component={Profile} />    
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;