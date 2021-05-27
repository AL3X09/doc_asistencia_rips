import React, { useState, Component } from 'react'
import { render } from 'react-dom'

import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render(){
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Asistencias APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/asistencia">Nueva Asistencia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Header



{/*<Router>
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
</Router>*/}